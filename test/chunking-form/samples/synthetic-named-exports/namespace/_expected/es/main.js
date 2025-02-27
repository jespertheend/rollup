function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}

var synthetic = {
	foo: 'synthetic-foo',
	bar: 'synthetic-bar',
	baz: 'synthetic-baz',
	default: 'not-in-namespace'
};
const foo = 'foo';

var synthetic$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': synthetic,
	foo: foo
}, [synthetic]));

const bar = 'bar';
var dep = 'not-overwritten';

var dep$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	bar: bar,
	'default': dep,
	synthetic: synthetic$1,
	foo: foo
}, [synthetic]));

export { dep$1 as dep };
