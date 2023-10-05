Events.on(ContentInitEvent, e => {
    //gaptika = 256
    Blocks.titaniumWall.envDisabled = Blocks.titaniumWallLarge.envDisabled = Blocks.door.envDisabled = Blocks.doorLarge.envDisabled = 272;
    Blocks.container.envDisabled = Blocks.unloader.envDisabled = Blocks.shipFabricator.envDisabled = 256;
    Items.scrap.buildable = false;
    //inomal = 512
    Blocks.surgeWall.envDisabled = Blocks.surgeWallLarge.envDisabled = 528
    //rinuru = 1024
});
