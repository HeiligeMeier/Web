<body>
    <form method="post" >
        <input name="test" value="<?php if(isset($_POST['test'])){echo $_POST['test'];} ?>">
        <button type="submit" name="action" value="foo1">Absenden1</button>
        <button type="submit" name="action" value="foo2">Absenden2</button>
        <button type="submit" name="bar" value="foo3">Absenden3</button>
    </form>
    <?php var_dump($_POST);?>
</body>

