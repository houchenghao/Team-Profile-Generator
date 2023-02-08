const Employee = require('../lib/Employee');

describe("Employee", () => {
    it('should set properties when create object', () => {
        const obj = new Employee('employeeName','id','email');

        expect(obj.name).toEqual('employeeName');
        expect(obj.id).toEqual('id');
        expect(obj.email).toEqual('email');
    })

    it ('should return properties when call method',() => {
        const obj = new Employee('employeeName','id','email');

        expect(obj.getName()).toEqual('employeeName');
        expect(obj.getId()).toEqual('id');
        expect(obj.getEmail()).toEqual('email');
    })

    it('should return role propetry',() => {
        const obj = new Employee();
        
        expect(obj.getRole()).toEqual('Employee')
    })


})
