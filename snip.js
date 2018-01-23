var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 4, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    var box = createTank()

    // var timer = setInterval(f, 45)


    function createTank() {
        // Add and manipulate meshes in the scene
        var box = BABYLON.MeshBuilder.CreateBox("box", {height: 0.3, width: 0.6, depth: 0.3}, scene);
        box.position.y = 0.0
        var matGrey = new BABYLON.StandardMaterial("matGrey", scene);
        matGrey.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
        box.material = matGrey

        var boxBarrel = BABYLON.MeshBuilder.CreateBox("boxBarrel", {height: 0.05, width: 0.6, depth: 0.05}, scene);
        boxBarrel.position.y = 0.1
        boxBarrel.position.x = 0.3
        var matBlack = new BABYLON.StandardMaterial("matBlack", scene);
        matBlack.diffuseColor = new BABYLON.Color3(0, 0, 0);
        boxBarrel.material = matBlack

        var matGreen = new BABYLON.StandardMaterial("matGreen", scene);
        matGreen.diffuseColor = new BABYLON.Color3(0.2, 1, 0.2);

        var boxLeftWing = BABYLON.MeshBuilder.CreateBox("boxLeftWing", {height: 0.1, width: 0.65, depth: 0.05}, scene);
        boxLeftWing.position.y = -0.11
        boxLeftWing.position.z = 0.15
        boxLeftWing.material = matBlack
        boxLeftWing.material = matGreen


        var boxRightWing = BABYLON.MeshBuilder.CreateBox("boxRightWing", {height: 0.1, width: 0.65, depth: 0.05}, scene);
        boxRightWing.position.y = -0.11
        boxRightWing.position.z = -0.15
        boxRightWing.material = matGreen

        box.addChild(boxBarrel)
        box.addChild(boxLeftWing)
        box.addChild(boxRightWing)

        return box
    }

    function f() {
        box.position.x += 0.01
    }

    return scene;

};

