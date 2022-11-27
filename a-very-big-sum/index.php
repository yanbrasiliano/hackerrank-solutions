<?php

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum($ar)
{
	$sum = 0;
	for ($i = 0; $i < count($ar); $i++) {
		$sum += $ar[$i];
	}
	return $sum;
}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$ar_count = intval(trim(fgets(STDIN)));

$ar_temp = rtrim(fgets(STDIN));

$ar = array_map('intval', preg_split('/ /', $ar_temp, -1, PREG_SPLIT_NO_EMPTY));

$result = aVeryBigSum($ar);

fwrite($fptr, $result . "\n");

fclose($fptr);
