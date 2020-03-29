const generateUniqueID = require('../../src/utils/generateUniqueId');
describe('Generate Unique ID', () => {
    it('should generate na unique ID', () => {
        const id = generateUniqueID();
        expect(id).toHaveLength(8);
    });
});