import fs from 'fs'
import path from 'path'

const __dirname = path.resolve();
let jsString;
let name;
let age;

beforeAll(() => {
    try {
        jsString = fs.readFileSync(path.join(__dirname, "src/index.js"), "utf8")
    } catch (error) {}
    try {
        age = jsString.match(/(const|let|var)\s*age\s*=\s*([0-9]*).*$/im)[2]
    } catch (error) {}
    try {
        name = jsString.match(/(const|let|var)\s*name\s*=\s*["'](.*)["'].*$/im)[2]
    } catch (error) {}
    
})


describe("Variables", () => {
    it("`age` variable is defined and has number value", async () => {
        expect(age).toBeDefined();
    });
    it("`name` variable is defined and has string value", async () => {
        expect(name).toBeDefined();
    });
} );
describe("HTML output", () => {
    it("HTML output contains `age` and `name` values", async () => {
        document.body.innerHTML = '<div id="root"></div>';
        await import('../../src/index.js');
        await new Promise(resolve => setTimeout(resolve, 1)) // pause
        expect(document.body.innerHTML).toMatch(age)
        expect(document.body.innerHTML).toMatch(name)
    });
} );

    
