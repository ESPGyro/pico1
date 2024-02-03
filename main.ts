//% color="#AA278D" icon="\uf2dc" weight=50
namespace Random {
    //% block
    //% blockId=random block="randomsq |%input"
    //% input.min=1 input.max=50 input.defl=10
    export function randomsq(input: number): number[] {
        let found = false;
        let randomNumber = 0;
        let randomNumbers: number[] = [];

        // 初始化隨機數組直到有指定數個不重複的數字
        while (randomNumbers.length < input) {
            randomNumber = Math.randomRange(1, input);
            found = false;

            // 檢查數字是否已經在數組中
            for (let value of randomNumbers) {
                if (value == randomNumber) {
                    found = true;
                    break;
                }
            }

            // 如果數字不在數組中，則添加到數組
            if (!found) {
                randomNumbers.push(randomNumber);
            }
        }

        // 返回生成的随機數組
        return randomNumbers;
    }
}
