<?php
echo $_GET['nome'];
?>
<h1>teste</h1>
<?php
$idade = $_GET['idade'];
if ($idade >= 18){
  echo "é de maior";
}
