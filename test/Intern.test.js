const Intern = require('../lib/Intern');

describe("Engineer", () => {
    it('should set properties when create object', () => {
        const obj = new Intern('employeeName','id','email','school');

        expect(obj.name).toEqual('employeeName');
        expect(obj.id).toEqual('id');
        expect(obj.email).toEqual('email');
        expect(obj.school).toEqual('school');
    })

    it ('should return properties when call method',() => {
        const obj = new Intern('employeeName','id','email','school');

        expect(obj.getName()).toEqual('employeeName');
        expect(obj.getId()).toEqual('id');
        expect(obj.getEmail()).toEqual('email');
        expect(obj.getSchool()).toEqual('school');
    })

    it('should return role propetry',() => {
        const obj = new Intern();
        
        expect(obj.getRole()).toEqual('Intern')
    })


})
