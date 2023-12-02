import u from '../utils/';
import * from '../exceptions';

class Guard {
	static ifEmpty(value: unknown): void{
		if (u.isEmpty(value)) {
      throw new ArgumentNotProvidedException('Property cannot be empty');
    }
	}
}

export default Guard;
