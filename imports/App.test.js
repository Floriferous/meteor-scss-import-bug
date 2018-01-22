import { Meteor } from 'meteor/meteor';
import App from './App';

if (Meteor.isClient) {
  describe('App tests', () => {
    it('works', () => {
      expect(1 + 1).to.equal(2);
    });
  });
}
