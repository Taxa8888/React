import { parseUrlParams } from '../app.helpers';
import { useLocation } from 'react-router-dom';

describe('Test parseUrlParams function', () => {
    it('test parseUrlParams', () => {
        const urlParams = useLocation().search;
        expect(parseUrlParams(urlParams.current.entries()));
    });
});
