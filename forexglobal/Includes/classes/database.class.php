<?php

class database {

	####################
	# Class Properties #
	####################
	var $errorReports;
	var $lastQuery;

	##################################################################
	# DB Constructor - connects to the server and selects a database #
	##################################################################
	function database($DBhost, $DBuname, $DBpass, $DBname, $errorReports = 0) {
		if ($errorReports == 1) {
			$this->showErrors();
		} else {
			$this->hideErrors();
		}

		$this->DBconnect = @mysql_connect($DBhost, $DBuname, $DBpass);
		if (($this->errorReports == 1) && (!$this->DBconnect)) {
			die("<strong>Cannot establish a database connection:</strong> " . mysql_error() . "<br />");
		}
		$this->select($DBname);
	}

	#######################
	# Select the database #
	#######################
	function select($DBname) {
		if (!@mysql_select_db($DBname, $this->DBconnect)) {
			if ($this->errorReports == 1) {
				die("<strong>Cannot select the database:</strong> " . mysql_error() . "<br />");
			}
		}
	}

	#####################
	# Execute the query #
	#####################
	function query($queryString) {
		// Log the query
		$this->lastQuery = $queryString;

		// Remove extra spaces
		$queryString = trim($queryString);

		// Query the database and store in variable $result
		$this->result = @mysql_query($queryString, $this->DBconnect);

		// Output error if any
		if (($this->errorReports == 1) && (mysql_error())) {
			echo "<strong>Cannot query the database:</strong> " . mysql_error() . "<br />";
		}

		// Query is an insert, delete, update, replace
		if (preg_match("/^(insert|delete|update|replace)\s+/i", $queryString)) {
			$this->rows_affected = mysql_affected_rows();
			$returnVal = $this->rows_affected;
		// Query is a select
		} else {
			$numRows = 0;

			// Clear the resultObjects array
			$this->resultObjects = array();

			while ($row = @mysql_fetch_object($this->result)) {
				$this->resultObjects[$numRows] = $row;
				$numRows++;
			}

			@mysql_free_result($this->result);

			$this->numRows = $numRows;
			$returnVal = $this->numRows;
		}

		return $returnVal;
	}

	####################################
	# Return a result set from a query #
	####################################
	function getResults($query = null, $output = OBJECT) {
		if ($query) {
			$this->query($query);
		}

		// Send back array of objects. Each row is an object
		if ($output == OBJECT) {
			return $this->resultObjects;
		} elseif ($output == ASSOC || $output == NUM) {
			if ($this->resultObjects) {
				$index = 0;
				foreach($this->resultObjects as $row) {
					$resultArray[$index] = get_object_vars($row);
					if ($output == NUM) {
						$resultArray[$index] = array_values($resultArray[$index]);
					}
					$index++;
				}
				return $resultArray;
			} else {
				return null;
			}
		}
	}

	##################################
	# Return a row from the database #
	##################################
	function getRow($query = null, $output = OBJECT, $offset = 0) {
		if ($query) {
			$this->query($query);
		}

		// If the output is an object then return object using the row offset
		if ($output == OBJECT) {
			return $this->resultObjects[$offset]?$this->resultObjects[$offset]:null;
		}
		// If the output is an associative array then return row as such
		elseif ($output == ASSOC) {
			return $this->resultObjects[$offset]?get_object_vars($this->resultObjects[$offset]):null;
		}
		// If the output is an numerical array then return row as such
		elseif ($output == NUM) {
			return $this->resultObjects[$offset]?array_values(get_object_vars($this->resultObjects[$offset])):null;
		}
		// If invalid output type was specified
		else {
			die("<strong>Syntax Error:</strong> Output type must OBJECT, ASSOC or NUM");
		}
	}

	##########################
	# Enable error reporting #
	##########################
	function showErrors() {
		$this->errorReports = 1;
	}

	###########################
	# Disable error reporting #
	###########################
	function hideErrors() {
		$this->errorReports = 0;
	}

	############################
	# Show the last query made #
	############################
	function lastQuery() {
		return $this->lastQuery;
	}

	##################################
	# Disconnect database connection #
	##################################
	function disconnect() {
		close($this->DBconnect);
	}
}

?>