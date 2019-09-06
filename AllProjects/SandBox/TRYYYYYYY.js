console.time('checkFor');
var answer = "0,3,0,5,3,4,0,0,0,0,0,1,0,3,0,3,2,3,3,2,0,3,1,0";
var ways = cartesianProduct([["false", "true"], ["false", "true"], ["false", "true"], ["false", "true"], ["false", "true"], ["false", "true"], ["false", "true"], ["false", "true"]]);
var field = [[parseInt(answer[0]), parseInt(answer[2]), parseInt(answer[4]), parseInt(answer[6]), parseInt(answer[8]), parseInt(answer[10])],
[parseInt(answer[46]), null, null, null, null, null, null, parseInt(answer[12])],
[parseInt(answer[44]), null, null, null, null, null, null, parseInt(answer[14])],
[parseInt(answer[42]), null, null, null, null, null, null, parseInt(answer[16])],
[parseInt(answer[40]), null, null, null, null, null, null, parseInt(answer[18])],
[parseInt(answer[38]), null, null, null, null, null, null, parseInt(answer[20])],
[parseInt(answer[36]), null, null, null, null, null, null, parseInt(answer[22])],
[parseInt(answer[34]), parseInt(answer[32]), parseInt(answer[30]), parseInt(answer[28]), parseInt(answer[26]), parseInt(answer[24])]];
var ghostField3 = [[], [], [], [], [], []];
var ghostField = [[], [], [], [], [], []];;
var ghostFieldTopToBot = [[], [], [], [], [], []];
for (var a = 0; a < 6; a++) {
    for (var b = 0; b < 6; b++) {
        ghostField3[a][b] = null;
        ghostField[a][b] = null;
        ghostFieldTopToBot[a][b] = null;
    }
}

visited = [];
var count = 0;
var output = "";
var nulls = 37;
var start = 0;
var tru = "true";
var fal = "false";
var last = 0;
var kata = [[], [], [], [], [], []];
for (var a = 0; a < 3000; a++) {
    do {
        nulls = Nulls();

        map();
    }
    while (nulls > Nulls());
    // console.log(EndRule());
    if (Nulls() == 0) {
        //console.log(Nulls());
        if (EndRule()) {
            a = 3000;;
            for (var e = 0; e < 6; e++) {
                for (var b = 0; b < 6; b++) {
                    output += String(field[e + 1][b + 1]) + ",";
                }
            }
            console.log(output.substring(0, output.length - 1));
        }
        else {
            last++;
            for (var j = 0; j < 6; j++) {
                for (var i = 0; i < 6; i++) {
                    field[i + 1][j + 1] = null;
                }
            }
            count = 0;
            Tree(ways);
        }
    }
    else {
        Tree(ways);
    }
}
console.log(Nulls());
console.log(field);
function map() {
    secondRearm();
    for (chislo = 6; chislo > 0; chislo--) {
        SetAnotherField(chislo);
        checkRigthForThree(ghostField3, chislo);
        rearm();
    }
    checkSecondFieldTop(ghostFieldTopToBot);

}
function SetAnotherField(chislo) {
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            if ((vacant(i + 1, j)) && (checkParal(i + 1, j, chislo)) && (CheckNumGran(i, j, chislo))) {
                visible(i, j, chislo);
            }

        }
    }
}

function checkRigthForThree(ghostField, chislo) {
    for (var i = 0; i < 6; i++) {
        //горизонталь

        if (ghostField[i].indexOf(chislo * 4) == ghostField[i].lastIndexOf(chislo * 4) && ((ghostField[i].indexOf(chislo * 4) >= 0))) {
            if ((vacant(i + 1, ghostField[i].indexOf(chislo * 4))) && (checkParal(i + 1, ghostField[i].indexOf(chislo * 4), chislo)) && (CheckNumGran(i, ghostField[i].indexOf(chislo * 4), chislo))) {
                //if (visible(i, ghostField[i].indexOf(chislo * 4),chislo)) {
                field[i + 1][ghostField[i].indexOf(chislo * 4) + 1] = chislo;
                // }
            }
        }
    }
    for (var j = 0; j < 6; j++) {                                   //вертикаль
        var mas = [];
        for (var i = 0; i < 6; i++) {
            mas.push(ghostField[i][j]);
        }

        if ((mas.indexOf(chislo * 4) == mas.lastIndexOf(chislo * 4)) && (mas.indexOf(chislo * 4) >= 0)) {
            if ((vacant(mas.indexOf(chislo * 4) + 1, j)) && (checkParal(mas.indexOf(chislo * 4) + 1, j, chislo)) && (CheckNumGran(mas.indexOf(chislo * 4), j, chislo))) {
                //if (visible(mas.indexOf(chislo * 4), j,chislo)) {

                field[mas.indexOf(chislo * 4) + 1][j + 1] = chislo;
                //}
            }
            //console.log(chislo*4,ghostField,mas,mas.indexOf(chislo * 4),mas.lastIndexOf(chislo * 4));
        }
    }
}
for (var j = 0; j < 6; j++) {                                   //вертикаль
    var mas = [];
    for (var i = 0; i < 6; i++) {
        mas.push(ghostField[i][j]);
    }

    if ((mas.indexOf(chislo * 2) == mas.lastIndexOf(chislo * 2)) && (mas.indexOf(chislo * 2) >= 0)) {
        field[mas.indexOf(chislo * 2) + 1][j + 1] = chislo;
    }
}


function checkSecondFieldTop(ghostField2) {
    for (var j = 0; j < 6; j++) {
        for (var a = 0; a < 6; a++) {
            if ((String(ghostField2[a][j]).length == 5)) {
                if (vacant(a + 1, j) && (checkParal(a + 1, j, chislo))) {
                    field[a + 1][j + 1] = parseInt(String(ghostField2[a][j])[4]);
                    a = 6;
                }
                return false;
            }
        }
    }
    return true;
}

function checkParal(i, j, chislo) {                                //горизонталь
    for (var k = 0; k < 6; k++) {
        if (field[i][k + 1] == chislo) {
            //console.log(i,k+1,chislo);
            return false;
        }
    }

    for (var a = 0; a < 6; a++) {
        if (field[a + 1][j + 1] == chislo) {
            return false;
        }
    }
    return true
}

function vacant(i, j) {
    if (field[i][j + 1] != null) {
        return false
    }
    return true
}

function rearm() {
    for (var a = 0; a < 6; a++) {
        for (var b = 0; b < 6; b++) {
            ghostField[a][b] = null;
            ghostField3[a][b] = null;;
        }
    }
}
function secondRearm() {
    for (var a = 0; a < 6; a++) {
        for (var b = 0; b < 6; b++) {
            ghostFieldTopToBot[a][b] = null;
        }
    }
}

function visible(i, j, chislo) {
    var beginGor = field[i + 1][0];
    var EndGor = field[i + 1][7];
    var beginVert = field[0][j];
    var EndVert = field[7][j];
    var masGor = [];
    var masVert = [];
    for (var a = 0; a < 6; a++) {
        masGor.push(field[i + 1][a + 1]);
    }
    masGor[j] = chislo;
    for (var a = 0; a < 6; a++) {
        masVert.push(field[a + 1][j + 1]);
    }
    masVert[i] = chislo;
    if (CheckCount(masGor, beginGor, true, i, "gor") && CheckCount(masGor, EndGor, false, i, "gor") && CheckCount(masVert, beginVert, true, j, "vert") && CheckCount(masVert, EndVert, false, j, "vert")) {


        ghostField3[i][j] += 4 * chislo;

        ghostFieldTopToBot[i][j] += String(chislo);


    }
}
function getCount(mas, way) {
    var max = 0;
    var count = 0;
    if (way) {
        for (var a = 0; a < 6; a++) {
            if (mas[a] > max) {
                max = mas[a];
                count++;
            }
        }
    }
    else {
        for (var a = 6; a >= 0; a--) {
            if (mas[a] > max) {
                max = mas[a];
                count++;
            }
        }
    }
    return count;
}
function CheckFreeMaxNum(mas, chislo) {
    var max = 1;
    var bool = true;
    while (bool) {

        if (mas.indexOf(chislo + max) > 0) {
            max++;
        }
        else {
            bool = false;
        }
    }
    if (chislo + max > 6) {
        return true;
    }
    return false

}
function CheckNumGran(i, j, chislo) {
    var beginGor = field[i + 1][0];
    var EndGor = field[i + 1][7];
    var beginVert = field[0][j];
    var EndVert = field[7][j];
    if (beginGor != 0) {
        if (beginGor - 7 + chislo > j) {

            return false
        }
    }
    if (EndGor != 0) {
        if (EndGor - 7 + chislo > 0) {
            if ((5 - (EndGor - 7 + chislo)) < j) {
                return false
            }
        }
    }
    if (beginVert != 0) {
        if (beginVert - 7 + chislo > i) {
            return false
        }
    }
    if (EndVert != 0) {
        if (EndVert - 7 + chislo > 0) {
            if ((5 - (EndVert - 7 + chislo)) < i) {
                return false
            }
        }
    }
    return true
}
function getMinCount(mas, way, x, or) {
    var masn = mas.slice();
    var tr = 0;
    var l = 0;
    var naob = 0;
    var nums = [mas.indexOf(1), mas.indexOf(2), mas.indexOf(3), mas.indexOf(4), mas.indexOf(5), mas.indexOf(6)];
    if (way == false) {
        masn = masn.reverse();
        naob = 1;
    }
    for (var a = 0; a < 6; a++) {
        if ((masn[a] == null) && (nums[5] < 0)) {
            l = a;
            if (naob == 1) {
                l = 5 - a;
            }
            if (or == "gor") {
                if ((vacant(x + 1, l)) && (checkParal(x + 1, l, 6)) && (CheckNumGran(x, l, 6))) {
                    masn[a] = 6;
                    nums[5] = a;
                }
            }
            else {
                if ((vacant(l + 1, x)) && (checkParal(l + 1, x, 6)) && (CheckNumGran(l, x, 6))) {
                    masn[a] = 6;
                    nums[5] = a;
                }
            }
        }
    }
    for (var a = 0; a < 5; a++) {
        if (masn[a] == null) {
            for (var c = a + 1; c < 6; c++) {
                if (masn[c] != null) {
                    tr = 0;
                    for (var e = 0; e < c; e++) {

                        if (masn[e] > masn[c]) {

                            tr = 1;
                            e = 7;
                        }
                    }
                    if (tr == 0) {
                        for (var b = 5; b > 1; b--) {
                            if ((nums[b - 1] < 0) && (b > masn[c])) {
                                masn[a] = b;
                                nums[b - 1] = 2;
                                b = 0;
                            }
                        }
                    }
                    c = 6;
                }
            }
        }
    }
    for (var a = 4; a > 0; a--) {
        if (nums[a] < 0) {
            for (var b = a; b < 6; b++) {
                if (masn.indexOf(b + 1) >= 0) {
                    var nuul = 0;
                    for (var c = masn.indexOf(b + 1) + 1; c < 6; c++) {
                        if (masn[c] == null) {
                            masn[c] = a + 1;
                            nums[a] = 2;
                            c = 6;
                            b = 6;
                            nuul++;
                        }
                    }
                }
            }
        }
    }
    for (var a = 0; a < 6; a++) {
        if (masn[a] == null) {
            masn[a] = nums.lastIndexOf(-1) + 1;
            nums[nums.lastIndexOf(-1)] = 2;
        }
    }

    //console.log(masn,mas,x,or);
    return getCount(masn, true);
}
function getMaxCount(mas, way) {
    var masn = mas.slice();
    if (way == false) {
        masn = masn.reverse();
    }
    var nums = [masn.indexOf(1), masn.indexOf(2), masn.indexOf(3), masn.indexOf(4), masn.indexOf(5), masn.indexOf(6)];
    var index = 0;
    var done = 0;
    var opor = [0];
    for (var a = 0; a < 6; a++) {
        if (masn[a] != null) {
            if (masn[a] > opor[opor.length - 1]) {
                opor.push(masn[a]);
            }
        }
    }
    opor.push(7);
    for (var a = 0; a < 6; a++) {
        done = 0;
        if (masn[a] == null) {
            for (var b = opor[index]; b <= opor[index + 1] - 1; b++) {
                if (nums[b] == -1) {
                    masn[a] = b + 1;
                    nums[b] = 2;
                    b = 7;
                    done = 1;
                }
            }
            if (done == 0) {

                if (done == 0) {
                    masn[a] = nums.indexOf(-1) + 1;
                    nums[masn[a] - 1] = 2;
                }
            }
        }
        else {
            if (opor.indexOf(masn[a]) >= 0) {
                index++;
            }

        }
    }
    return getCount(masn, true);

}
function CheckCount(mas, granica, way, e, or) {
    if ((getMaxCount(mas, way) < granica) && (granica != 0)) {
        //console.log("MAX", mas, granica, getMaxCount(mas, way), way);
        return false
    }
    if ((getMinCount(mas, way, e, or) > granica) && (granica != 0)) {
        //console.log("MIN", mas, granica, getMinCount(mas, way,e,or), way,e,or);
        return false
    }
    return true
}
function Perebor(num) {
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 6; j++) {
            if (String(ghostFieldTopToBot[i][j]).length == 6) {

                    field[i + 1][j + 1] = parseInt(String(ghostFieldTopToBot[i][j])[num]);
                    //console.log("Изменения", ghostFieldTopToBot[i][j], num - 4);
                    i = 7;
                    j = 7;
                
            }

            if ((i == 5) && (j == 5) && (String(ghostFieldTopToBot[i][j]).length > 6)) {
                alarm();
            }
        }
    }
}
function EndRule() {
    var gor = [];
    var vert = [];

    for (var i = 0; i < 6; i++) {
        gor = field[i + 1].slice(1, 7);
        for (var a = 1; a < 7; a++) {
            if (gor.indexOf(a) != gor.lastIndexOf(a)) {
                //console.log("5", gor, a);
                return false
            }
        }
        if ((getCount(gor, true) != field[i + 1][0]) && (field[i + 1][0])) {

            // console.log("1", i + 1, getCount(gor, true), field[i + 1][7], gor);
            return false
        }
        if ((getCount(gor, false) != field[i + 1][7]) && (field[i + 1][7] > 0)) {

            // console.log("2", i + 1, getCount(gor, false), field[i + 1][7], gor);
            return false
        }
    }

    for (var j = 0; j < 6; j++) {
        for (var i = 0; i < 6; i++) {
            vert.push(field[i + 1][j + 1]);
        }
        for (var a = 1; a < 7; a++) {
            if (vert.indexOf(a) != vert.lastIndexOf(a)) {

                // console.log("6", a, vert);
                return false
            }
        }
        if ((getCount(vert, true) != field[0][j]) && (field[0][j] > 0)) {

            // console.log("3", j + 1, getCount(vert, true), field[0][j + 1], vert);
            return false
        }
        if ((getCount(vert, false) != field[7][j]) && (field[7][j] > 0)) {
            // console.log("4", j + 1, getCount(vert, false), field[7][j], vert);
            return false
        }
        vert = [];
    }
    return true;

}
function Nulls() {
    var nulli = 0;
    for (var j = 0; j < 6; j++) {
        for (var i = 0; i < 6; i++) {
            if (field[i+1][j+1] == null) {
                nulli += 1;
            }
        }
    }
    return nulli;
}
function Tree(ways) {
    if (ways[last][count] == "true") {
        Perebor(4);
    }
    else {
        Perebor(5);
    }
    count++;
    //console.log("count");
    if (count - 1 > 8) {

        //console.log(last);
        last++;
        for (var j = 0; j < 6; j++) {
            for (var i = 0; i < 6; i++) {
                field[i + 1][j + 1] = null;
            }
        }
        count = 0;

    }
}
function cartesianProduct(arr) {
    return arr.reduce(function (a, b) {
        return a.map(function (x) {
            return b.map(function (y) {
                return x.concat(y);
            })
        }).reduce(function (a, b) { return a.concat(b) }, [])
    }, [[]])
}
function alarm() {
    var nums = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 6; i++) {
        nums = [0, 0, 0, 0, 0, 0];
        for (var j = 0; j < 6; j++) {
            for (var k = 4; k < String(ghostFieldTopToBot[i][j]).length; k++) {
                nums[String(ghostFieldTopToBot[i][j])[k] - 1] += 1;
            }
        }
        for (var e = 0; e < 6; e++) {
            if (nums[e] == 2) {
                var chislo = nums.indexOf(2) + 1;
                if (ways[last][count] == "false") {
                    for (var u = 5; u >= 0; u--) {
                        if (String(ghostFieldTopToBot[i][u]).indexOf(chislo) >= 0) {
                            field[i + 1][u + 1] = chislo; u = 0;
                        }
                    }
                }
                else {
                    for (var u = 0; u < 6; u++) {
                        if (String(ghostFieldTopToBot[i][u]).indexOf(chislo) >= 0) {
                            field[i + 1][u + 1] = chislo; u = 6;
                        }
                    }
                }
                e = 6;
                i = 6;
                j = 6;
                k = 16;
            }
        }
    }
}
console.timeEnd('checkFor');