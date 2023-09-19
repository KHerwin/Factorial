import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FactorialPage extends Page {
    /**
     * define selectors using getter methods
     */
    get number (){
        return $("//input[@id='number']");
    }

    get calculateButton () {
        return $("//button[@id='getFactorial']");
    }

    get resultText () { 
        return $("//p[@id='resultDiv']");
    }

    // function step

    async setNumberInput(valeur) {
        (await this.number).setValue(valeur);
    }

    async getResultText() {
        (await this.resultText).getText();
    }

    open () {
        return super.open('');
    }
}

export default new FactorialPage();
