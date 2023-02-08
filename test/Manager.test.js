const Manager = require('../lib/Manager');

describe("Manager", () => {
    it('should set properties when create object', () => {
        const obj = new Manager('employeeName','id','email','officeNumber');

        expect(obj.name).toEqual('employeeName');
        expect(obj.id).toEqual('id');
        expect(obj.email).toEqual('email');
        expect(obj.officeNumber).toEqual('officeNumber');
    })

    it ('should return properties when call method',() => {
        const obj = new Manager('employeeName','id','email','officeNumber');

        expect(obj.getName()).toEqual('employeeName');
        expect(obj.getId()).toEqual('id');
        expect(obj.getEmail()).toEqual('email');
        expect(obj.getOfficeNumber()).toEqual('officeNumber');
    })

    it('should return role propetry',() => {
        const obj = new Manager();
        
        expect(obj.getRole()).toEqual('Manager')
    })


})
