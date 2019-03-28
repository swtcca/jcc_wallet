const chai = require("chai");
const expect = chai.expect;
const util = require("../lib/util");

describe("test util", function () {

    describe("test encryptWallet", function () {
        it("the default type and alias should be right when call encryptWallet function", function () {
            let keypairs = {
                secret: "shTJVfLFK9JdbRmN3tCLSoMy36yiD",
                address: "jGPxfPsixZXpYNaYiQdnd3n1B26RsgLU69",
                default: "111"
            };
            let encryptData = util.encryptWallet("123456", keypairs, {});
            let {
                type,
                alias
            } = encryptData;
            let isDefault = encryptData.default;
            expect(type).to.equal("swt");
            expect(isDefault).to.true;
            expect(alias).to.equal("");

        });

        it("the default type and alias should be right when call encryptWallet function if the opts is undefined", function () {
            let keypairs = {
                secret: "shTJVfLFK9JdbRmN3tCLSoMy36yiD",
                address: "jGPxfPsixZXpYNaYiQdnd3n1B26RsgLU69",
                default: false
            };
            let encryptData = util.encryptWallet("123456", keypairs);
            let {
                type,
                alias
            } = encryptData;
            let isDefault = encryptData.default;
            expect(type).to.equal("swt");
            expect(isDefault).to.equal(false);
            expect(alias).to.equal("");
        });
    });

    describe("test encryptContact", function () {
        it("should encrypt contact correctly", function () {
            let data = util.encryptContact("123456", [123456789], {});
            let contact = util.decrypt("123456", data);
            expect(contact).to.equal("[123456789]");
        });

        it("should encrypt contact correctly if the opts is undefined", function () {
            let data = util.encryptContact("123456", [123456789]);
            let contact = util.decrypt("123456", data);
            expect(contact).to.equal("[123456789]");
        });
    });
});