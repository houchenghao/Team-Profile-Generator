const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    it('should set properties when create object', () => {
        const obj = new Engineer('employeeName','id','email','github');

        expect(obj.name).toEqual('employeeName');
        expect(obj.id).toEqual('id');
        expect(obj.email).toEqual('email');
        expect(obj.gitHub).toEqual('github');
    })

    it ('should return properties when call method',() => {
        const obj = new Engineer('employeeName','id','email','github');

        expect(obj.getName()).toEqual('employeeName');
        expect(obj.getId()).toEqual('id');
        expect(obj.getEmail()).toEqual('email');
        expect(obj.getGithub()).toEqual('github');
    })

    it('should return role propetry',() => {
        const obj = new Engineer();
        
        expect(obj.getRole()).toEqual('Engineer')
    })


})
