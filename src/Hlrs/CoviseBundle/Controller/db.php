<?php

$con = mysqli_connect('127.0.0.1','debb','tjfg834jf74hf784hf754','debb');
if (!$con)
  {
  die('Could not connect: ' . mysqli_error($con));
  }
  //Get the trial_id according to the Covise Port
  $port = intval($_GET['port']);
  $sql="SELECT trial_id FROM context_covise WHERE port_covise = '".$port."' LIMIT 0,1";
  
  $result_trial = mysqli_query($con,$sql);  
  if(! result_trial )
  {
    die('Could not get data: ' . mysql_error());
  }    
  while($row = mysqli_fetch_array($result_trial)){    
    $q = $row['trial_id'];
  }
    
  $sql_trial="SELECT trial_name, E.experimentID, E.type, path_plmxml,object_path,testbed_instance 
        FROM trial T join experiment E on T.experiment_id = E.id 
        WHERE T.id = '".$q."'";


$result = mysqli_query($con,$sql_trial);

echo "<table border='0'>";
while($row = mysqli_fetch_array($result))
  { 
  echo "<tr><td>" ."trial " . $row['trial_name'] . "</td></tr>";
  echo "<tr><td>" ."experiment " . $row['experimentID'] . "</td></tr>";
  echo "<tr><td>" ."experiment_type " . $row['type'] . "</td></tr>";
  echo "<tr><td>" ."path_plmxml " . $row['path_plmxml'] . "</td></tr>";
  echo "<tr><td>" ."object_path " . $row['object_path'] . "</td></tr>";
  echo "<tr><td>" ."testbed_instance " . $row['testbed_instance'] . "</td></tr>";
  }
echo "</table>";

mysqli_close($con);
?>
