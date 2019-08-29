(function () {
    const iAGRESSION = 10

    var canvas = document.getElementById("canv");
    var ctx = canvas.getContext("2d");

    /*  array that holds the elements */
    var elements = []


    /*  MainLoop */
    function main() {
        for (let i = 0; i < elements.length; i++) {
            randomizeDirection(i);
            elements[i].vLastPos = vDrawCube(elements[i].vLastPos, elements[i].vDirection, elements[i].iSize, iAGRESSION, elements[i].sColor)
            borderBlock(i, iAGRESSION);
        }
    }

    /*  drawCube function */
    function vDrawCube(vLastPos, vDirection, iSize, iAggression, sColor) {
        /*  Sets element style */
        ctx.fillStyle = sColor;
        /*  clear last position */
        // ctx.clearRect(vLastPos.x, vLastPos.y, iSize + 1, iSize + 1);
        /*  creates new cube */
        ctx.fillRect(vLastPos.x + vDirection.x * iAggression, vLastPos.y + vDirection.y * iAggression, iSize, iSize);
        /*  sets vLastPos to current pos */
        return vLastPos = { x: vLastPos.x + vDirection.x * iAggression, y: vLastPos.y + vDirection.y * iAggression };
    }

    function randomizeDirection(iIndex) {
        elements[iIndex].vDirection.x = Math.round(Math.random() * 2) - 1;
        elements[iIndex].vDirection.y = Math.round(Math.random() * 2) - 1;
    }

    function borderBlock(iIndex, iAgression) {
        if (elements[iIndex].vLastPos.x < 0) {
            elements[iIndex].vLastPos.x += 1 * iAgression;
        }
        if (elements[iIndex].vLastPos.x > canvas.width) {
            elements[iIndex].vLastPos.x -= 1 * iAgression;
        }
        if (elements[iIndex].vLastPos.y < 0) {
            elements[iIndex].vLastPos.y += 1 * iAgression;
        }
        if (elements[iIndex].vLastPos.y > canvas.height) {
            elements[iIndex].vLastPos.y -= 1 * iAgression;
        }
    }

    /*  create elements */
    function createElements(iCount) {
        for (let i = 0; i < iCount; i++) {
            elements.push({
                vLastPos: {
                    x: canvas.width / 2,
                    y: canvas.height / 2,
                },
                vDirection: {
                    x: 0,
                    y: 0
                },
                iSize: iAGRESSION,
                sColor: getRandomColor() + '01'
            })
        }
    }

    /*  random color function */
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    createElements(1000);
    /*  10ms Gametick */
    setInterval(main, 1);
})()