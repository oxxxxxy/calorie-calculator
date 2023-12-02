// this lib is a try to abstract dependencies for any utilits, lol
// i mean, if some dependency become <i>bad</i>, only that place will be refactored.

import _ from 'lodash';
import memoize from 'fast-memoize';
import equal from 'fast-deep-equal';



type ObjectAnyPropPlainDeclaration = Record<string, any>;


const u: ObjectAnyPropPlainDeclaration = {};
export default u;



const isEmpty = (arg: any): boolean => _.isEmpty(arg);
u.isEmpty = isEmpty;

u.memoize = memoize;

const isEqual =
	(...args: [any, any, ...any]): boolean => args.every(
		(e, i, a) => {
			if(i === a.length - 1){
				return true;
			}
			return equal(e, a[i + 1]);
		}
	);
u.isEqual = isEqual;

//wrap funcs to execucte them from left to right
const pipeTwo = (f: Function, s: Function): Function => (...args: any) => s(f(...args)); 

//make sequence of funcs to execute them from left to right
const pipe = (...args: [Function, Function, ...Function[]]): Function => (
	args.reduce(
		(acc: Function, e: Function, i: number, a: Function[]): Function => {
				if(i){
					if(i === a.length - 1){
						return acc;
					}
					return pipeTwo(acc, a[i + 1]);	
				}else{
					return pipeTwo(e, a[i + 1]);
				}
			},
			// @ts-ignore: it is init value, which would changed to Function at first iteration
			null
		)
);
u.pipe = pipe;

//memoize args and get them after by call
const memoizeArgs = (...args: [any, ...any]): Function => {

	const memoizedArgs = memoize(a => a);
	
	return memoizedArgs.bind(null, args);
};
u.memoizeArgs = memoizeArgs;



