var alpha = (function () {

    var copyright = "Portions Copyright(c) 1983 Windmill Software Inc.";

    var textoffdat = [	// [16]
        72, 0, -72, -72,
        144, 0, -288, 144,
        144, -216, 144, -72,
        144, -216, -72, 144];

    var cgaletA = [
        0x0f, 0xff, 0x00,
        0x3f, 0xff, 0xc0,
        0x3c, 0x03, 0xc0,
        0x3c, 0x03, 0xc0,
        0x3c, 0x03, 0xc0,
        0x3f, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xfc, 0x00, 0xf0,
        0xfc, 0x00, 0xf0,
        0xfc, 0x00, 0xf0,
        0xfc, 0x00, 0xf0,
        0xfc, 0x00, 0xf0];

    var cgaletB = [
        0x3f, 0xfc, 0x00,
        0xff, 0xff, 0x00,
        0xf0, 0x0f, 0x00,
        0xf0, 0x0f, 0x00,
        0xf0, 0x0f, 0x00,
        0xff, 0xff, 0x00,
        0xff, 0xff, 0xf0,
        0xfc, 0x00, 0xf0,
        0xfc, 0x00, 0xf0,
        0xfc, 0x00, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cgaletC = [
        0x3f, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0x00,
        0xfc, 0x00, 0x00,
        0xfc, 0x00, 0x00,
        0xfc, 0x00, 0x00,
        0xfc, 0x00, 0xf0,
        0xfc, 0x00, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cgaletD = [
        0xff, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0xff, 0xf0,
        0xff, 0xff, 0xc0];

    var cgaletE = [
        0x3f, 0xff, 0xf0,
        0xff, 0xff, 0xf0,
        0xf0, 0x00, 0x00,
        0xf0, 0x00, 0x00,
        0xf0, 0x00, 0x00,
        0xff, 0xff, 0x00,
        0xff, 0xff, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xf0];

    var cgaletF = [
        0x3f, 0xff, 0xf0,
        0xff, 0xff, 0xf0,
        0xfc, 0x00, 0x00,
        0xfc, 0x00, 0x00,
        0xfc, 0x00, 0x00,
        0xff, 0xff, 0x00,
        0xff, 0xff, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00];

    var cgaletG = [
        0x3f, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0x00,
        0xf0, 0x00, 0x00,
        0xfc, 0x0f, 0xc0,
        0xff, 0x0f, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cgaletH = [
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xff, 0xff, 0xf0,
        0xff, 0xff, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0];

    var cgaletI = [
        0x00, 0xf0, 0x00,
        0x00, 0xf0, 0x00,
        0x00, 0xf0, 0x00,
        0x00, 0xf0, 0x00,
        0x00, 0xf0, 0x00,
        0x00, 0xf0, 0x00,
        0x00, 0xff, 0x00,
        0x00, 0xff, 0x00,
        0x00, 0xff, 0x00,
        0x00, 0xff, 0x00,
        0x00, 0xff, 0x00,
        0x00, 0xff, 0x00];

    var cgaletJ = [
        0x00, 0x0f, 0x00,
        0x00, 0x0f, 0x00,
        0x00, 0x0f, 0x00,
        0x00, 0x0f, 0x00,
        0x00, 0x0f, 0x00,
        0x00, 0x0f, 0xf0,
        0x00, 0x0f, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cgaletK = [
        0xf0, 0x0f, 0x00,
        0xf0, 0x0f, 0x00,
        0xf0, 0x0f, 0x00,
        0xf0, 0x0f, 0x00,
        0xf0, 0x0f, 0x00,
        0xff, 0xff, 0x00,
        0xff, 0xff, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0];

    var cgaletL = [
        0xf0, 0x00, 0x00,
        0xf0, 0x00, 0x00,
        0xf0, 0x00, 0x00,
        0xf0, 0x00, 0x00,
        0xf0, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xf0];

    var cgaletM = [
        0x3f, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0xf0, 0xf0,
        0xf0, 0xf0, 0xf0,
        0xf0, 0xf0, 0xf0,
        0xf0, 0xf0, 0xf0,
        0xfc, 0xf0, 0xf0,
        0xfc, 0xf0, 0xf0,
        0xfc, 0xf0, 0xf0,
        0xfc, 0xf0, 0xf0,
        0xfc, 0xf0, 0xf0,
        0xfc, 0xf0, 0xf0];

    var cgaletN = [
        0x0f, 0xff, 0xc0,
        0x3f, 0xff, 0xf0,
        0x3c, 0x00, 0xf0,
        0x3c, 0x00, 0xf0,
        0x3c, 0x00, 0xf0,
        0x3c, 0x00, 0xf0,
        0x3f, 0x00, 0xf0,
        0x3f, 0x00, 0xf0,
        0x3f, 0x00, 0xf0,
        0x3f, 0x00, 0xf0,
        0x3f, 0x00, 0xf0,
        0x3f, 0x00, 0xf0];

    var cgaletO = [
        0x3f, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cgaletP = [
        0x3f, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xff, 0xff, 0xf0,
        0xff, 0xff, 0xc0,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00];

    var cgaletQ = [
        0x3f, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x3f, 0xf0,
        0xf0, 0x3f, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cgaletR = [
        0x3f, 0xfc, 0x00,
        0xff, 0xff, 0x00,
        0xf0, 0x0f, 0x00,
        0xf0, 0x0f, 0x00,
        0xf0, 0x0f, 0x00,
        0xff, 0xff, 0x00,
        0xff, 0xff, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0];

    var cgaletS = [
        0x3f, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0x00,
        0xf0, 0x00, 0x00,
        0xff, 0xff, 0xc0,
        0x3f, 0xff, 0xf0,
        0x00, 0x0f, 0xf0,
        0x00, 0x0f, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cgaletT = [
        0xff, 0xff, 0xf0,
        0xff, 0xff, 0xf0,
        0x00, 0xf0, 0x00,
        0x00, 0xf0, 0x00,
        0x00, 0xf0, 0x00,
        0x00, 0xf0, 0x00,
        0x00, 0xff, 0x00,
        0x00, 0xff, 0x00,
        0x00, 0xff, 0x00,
        0x00, 0xff, 0x00,
        0x00, 0xff, 0x00,
        0x00, 0xff, 0x00];

    var cgaletU = [
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cgaletV = [
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0x3c, 0x0f, 0x00,
        0x3c, 0x0f, 0x00,
        0x3f, 0xff, 0x00,
        0x0f, 0xfc, 0x00];

    var cgaletW = [
        0xf0, 0xf0, 0xf0,
        0xf0, 0xf0, 0xf0,
        0xf0, 0xf0, 0xf0,
        0xf0, 0xf0, 0xf0,
        0xf0, 0xf0, 0xf0,
        0xf0, 0xf0, 0xf0,
        0xfc, 0xf0, 0xf0,
        0xfc, 0xf0, 0xf0,
        0xfc, 0xf0, 0xf0,
        0xfc, 0xf0, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cgaletX = [
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0x0f, 0xff, 0x00,
        0x0f, 0xff, 0x00,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0,
        0xff, 0x00, 0xf0];

    var cgaletY = [
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0,
        0x00, 0xfc, 0x00,
        0x00, 0xfc, 0x00,
        0x00, 0xfc, 0x00,
        0x00, 0xfc, 0x00,
        0x00, 0xfc, 0x00];

    var cgaletZ = [
        0x3f, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0x00, 0xf0,
        0x00, 0x00, 0xf0,
        0x00, 0x00, 0xf0,
        0x3f, 0xff, 0xf0,
        0xff, 0xff, 0xc0,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cganum0 = [
        0x3f, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cganum1 = [
        0x00, 0x3c, 0x00,
        0x00, 0x3c, 0x00,
        0x00, 0x3c, 0x00,
        0x00, 0x3c, 0x00,
        0x00, 0x3c, 0x00,
        0x00, 0xfc, 0x00,
        0x00, 0xfc, 0x00,
        0x00, 0xfc, 0x00,
        0x00, 0xfc, 0x00,
        0x00, 0xfc, 0x00,
        0x00, 0xfc, 0x00,
        0x00, 0xfc, 0x00];

    var cganum2 = [
        0x3f, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0x00, 0xf0,
        0x00, 0x00, 0xf0,
        0x00, 0x00, 0xf0,
        0x00, 0x00, 0xf0,
        0x3f, 0xff, 0xf0,
        0xff, 0xff, 0xc0,
        0xff, 0x00, 0x00,
        0xff, 0x00, 0x00,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xf0];

    var cganum3 = [
        0x3f, 0xfc, 0x00,
        0xff, 0xff, 0x00,
        0xf0, 0x0f, 0x00,
        0xf0, 0x0f, 0x00,
        0x00, 0x0f, 0x00,
        0x0f, 0xff, 0xc0,
        0x0f, 0xff, 0xf0,
        0x00, 0x03, 0xf0,
        0xf0, 0x03, 0xf0,
        0xf0, 0x03, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cganum4 = [
        0xf0, 0x00, 0x00,
        0xf0, 0x00, 0x00,
        0xf0, 0x0f, 0x00,
        0xf0, 0x0f, 0x00,
        0xf0, 0x0f, 0x00,
        0xf0, 0x0f, 0x00,
        0xf0, 0x0f, 0x00,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xf0,
        0x00, 0x3f, 0x00,
        0x00, 0x3f, 0x00,
        0x00, 0x3f, 0x00];

    var cganum5 = [
        0x3f, 0xff, 0x00,
        0xff, 0xff, 0x00,
        0xf0, 0x00, 0x00,
        0xf0, 0x00, 0x00,
        0xf0, 0x00, 0x00,
        0xff, 0xff, 0xc0,
        0x3f, 0xff, 0xf0,
        0x00, 0x0f, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cganum6 = [
        0x3f, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0x00,
        0xff, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xf0, 0x0f, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cganum7 = [
        0x3f, 0xff, 0xc0,
        0x3f, 0xff, 0xf0,
        0x00, 0x00, 0xf0,
        0x00, 0x00, 0xf0,
        0x00, 0x00, 0xf0,
        0x00, 0x00, 0xf0,
        0x00, 0x03, 0xf0,
        0x00, 0x03, 0xf0,
        0x00, 0x03, 0xf0,
        0x00, 0x03, 0xf0,
        0x00, 0x03, 0xf0,
        0x00, 0x03, 0xf0];

    var cganum8 = [
        0x03, 0xff, 0x00,
        0x0f, 0xff, 0xc0,
        0x0f, 0x03, 0xc0,
        0x0f, 0x03, 0xc0,
        0x0f, 0x03, 0xc0,
        0x0f, 0xff, 0xc0,
        0x3f, 0xff, 0xf0,
        0xf0, 0x03, 0xf0,
        0xf0, 0x03, 0xf0,
        0xf0, 0x03, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xc0];

    var cganum9 = [
        0x3f, 0xff, 0xc0,
        0xff, 0xff, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xf0, 0x00, 0xf0,
        0xff, 0xff, 0xf0,
        0x3f, 0xff, 0xf0,
        0x00, 0x0f, 0xf0,
        0x00, 0x0f, 0xf0,
        0x00, 0x0f, 0xf0,
        0x00, 0x0f, 0xf0,
        0x00, 0x0f, 0xf0];

    var cgasymdot = [
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x03, 0xc0, 0x00,
        0x03, 0xc0, 0x00];

    var cgasymline = [
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x0f, 0xff, 0xf0];

    var cgasymspace = [
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00,
        0x00, 0x00, 0x00];

    return {

        ascii2cga: [	// [0x5f], short
            cgasymspace, null, null, null, null, null, null, null, null, null, null, null, null, null, cgasymdot, null,     /*  !"#$%&'()*+,-./ */
            cganum0, cganum1, cganum2, cganum3, cganum4, cganum5, cganum6,        /* 0123456 */
            cganum7, cganum8, cganum9, null, null, null, null, null, null, null, cgaletA, cgaletB,     /* 789:;<=>?:AB */
            cgaletC, cgaletD, cgaletE, cgaletF, cgaletG, cgaletH, cgaletI,        /* CDEFGHI */
            cgaletJ, cgaletK, cgaletL, cgaletM, cgaletN, cgaletO, cgaletP,        /* JKLMNOP */
            cgaletQ, cgaletR, cgaletS, cgaletT, cgaletU, cgaletV, cgaletW,        /* QRSTUVW */
            cgaletX, cgaletY, cgaletZ, null, null, null, null, cgasymline, null, cgaletA,        /* XYZ[\]^_`a */
            cgaletB, cgaletC, cgaletD, cgaletE, cgaletF, cgaletG, cgaletH,        /* bcdefgh */
            cgaletI, cgaletJ, cgaletK, cgaletL, cgaletM, cgaletN, cgaletO,        /* ijklmno */
            cgaletP, cgaletQ, cgaletR, cgaletS, cgaletT, cgaletU, cgaletV,        /* pqrstuv */
            cgaletW, cgaletX, cgaletY, cgaletZ, null, null, null, null]                      /* wxyz{|}~ */

    }

}());

