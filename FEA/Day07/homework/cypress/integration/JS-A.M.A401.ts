import {
  Node,
  CallExpression,
  Identifier,
  createSourceFile,
  ScriptTarget,
  SyntaxKind
} from 'typescript';

require('../../src/JS-A.M.A401-problem.js');

const {
  problem01,
  problem02,
  problem03,
  problem04,
  problem05,
  problem0601,
  problem0602,
  problem0603,
  problem0604,
  problem07,
  faMap,
  faFilter,
  faReduce,
  problem1101,
  problem1102,
  getProp
} = (window as any).jsa401;

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  age: number;
  salary: number;
}

describe('JS-A.M.A401', function () {
  beforeEach(function () {
    cy.fixture('data.json').as('users');
  });

  describe('Problem 01', function () {
    it('should use Array.protype.forEach and yield correctly', function () {
      cy.get<User[]>('@users').then(function (users) {
        const expected: string[] = [];
        users.forEach(function (user) {
          expected.push(user.first_name + ' ' + user.last_name);
        });

        const forEach = cy.spy(Array.prototype, 'forEach');
        expect(problem01()).to.deep.equal(expected);
        expect(forEach).to.be.calledOnce;
      });
    });
  });

  describe('Problem 02', function () {
    it('should use Array.prototype.filter and yield correct answer', function () {
      cy.get<User[]>('@users').then(function (users) {
        const expected = users.filter(function (user) {
          return user.gender === 'Male' && user.age < 40;
        });

        const filter = cy.spy(Array.prototype, 'filter');
        expect(problem02()).to.deep.equal(expected);
        expect(filter).to.be.calledOnce;
      });
    });
  });

  describe('Problem 03', function () {
    it('should use Array.prototype.map and yield correct answer', function () {
      cy.get<User[]>('@users').then(function (users) {
        const expected = users.map(function (user) {
          return user.first_name + ' ' + user.last_name;
        });

        const map = cy.spy(Array.prototype, 'map');
        expect(problem03()).to.deep.equal(expected);
        expect(map).to.be.calledOnce;
      });
    });
  });

  describe('Problem 04', function () {
    it('should use Array.prototype.map to transform array and yield correct answer', function () {
      cy.get<User[]>('@users').then(function (users) {
        const expected = users.map(function (user) {
          return {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            gender: user.gender,
            age: user.age,
            salary: user.salary
          };
        });

        const map = cy.spy(Array.prototype, 'map');
        expect(problem04()).to.deep.equal(expected);
        expect(map).to.be.calledOnce;
      });
    });
  });

  describe('Problem 05', function () {
    it('should use Array.prototype.reduce to calculate the average age', function () {
      cy.get<User[]>('@users').then(function (users) {
        const expected =
          users.reduce(function (acc, user) {
            return acc + user.age;
          }, 0) / users.length;

        const reduce = cy.spy(Array.prototype, 'reduce');
        expect(problem05()).to.deep.equal(expected);
        expect(reduce).to.be.calledOnce;
      });
    });
  });

  describe('Problem 06', function () {
    it('should use Array.prototype.reduce to implement Problem 02', function () {
      cy.get<User[]>('@users').then(function (users) {
        const expected = users.reduce(function (acc, user) {
          acc.push(user.first_name + ' ' + user.last_name);

          return acc;
        }, [] as string[]);

        const reduce = cy.spy(Array.prototype, 'reduce');
        expect(problem0601()).to.deep.equal(expected);
        expect(reduce).to.be.calledOnce;
      });
    });

    it('should use Array.prototype.reduce to implement Problem 03', function () {
      cy.get<User[]>('@users').then(function (users) {
        const expected = users.reduce(function (acc, user) {
          if (user.gender === 'Male' && user.age < 40) {
            acc.push(user);
          }

          return acc;
        }, [] as User[]);

        const reduce = cy.spy(Array.prototype, 'reduce');
        expect(problem0602()).to.deep.equal(expected);
        expect(reduce).to.be.calledOnce;
      });
    });

    it('should use Array.prototype.reduce to implement Problem 04', function () {
      cy.get<User[]>('@users').then(function (users) {
        const expected = users.reduce(function (acc, user) {
          acc.push({
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            gender: user.gender,
            age: user.age,
            salary: user.salary
          });

          return acc;
        }, [] as any[]);

        const reduce = cy.spy(Array.prototype, 'reduce');
        expect(problem0603()).to.deep.equal(expected);
        expect(reduce).to.be.calledOnce;
      });
    });
  });

  describe('Problem 07', function () {
    it('should use Array.prototype.sort to sort users by field first_name in ascending order', function () {
      cy.get<User[]>('@users').then(function (users) {
        const expected = users.sort(function (a, b) {
          return a.first_name < b.first_name ? -1 : 1;
        });

        const sort = cy.spy(Array.prototype, 'sort');
        expect(problem07()).to.deep.equal(expected);
        expect(sort).to.be.calledOnce;
      });
    });
  });

  describe('Problem 08', function () {
    it('should create function faMap that works like Array.prototype.map', function () {
      expect(
        faMap([], function (x: number) {
          return x * 2;
        })
      ).to.deep.equal([]);

      expect(
        faMap([1, 2, 3, 4], function (x: number) {
          return x * 2;
        })
      ).to.deep.equal([2, 4, 6, 8]);

      const forEachSpy = cy.spy(Array.prototype, 'forEach');
      const mapSpy = cy.spy(Array.prototype, 'map');
      const filterSpy = cy.spy(Array.prototype, 'filter');
      const reduceSpy = cy.spy(Array.prototype, 'reduce');

      expect(forEachSpy).to.be.callCount(0);
      expect(mapSpy).to.be.callCount(0);
      expect(filterSpy).to.be.callCount(0);
      expect(reduceSpy).to.be.callCount(0);
    });
  });

  describe('Problem 09', function () {
    it('should create function faFilter that works like Array.prototype.filter', function () {
      expect(
        faFilter([], function (x: number) {
          return x % 2 == 0;
        })
      ).to.deep.equal([]);

      expect(
        faFilter([1, 2, 3, 4], function (x: number) {
          return x % 2 == 0;
        })
      ).to.deep.equal([2, 4]);

      const forEachSpy = cy.spy(Array.prototype, 'forEach');
      const mapSpy = cy.spy(Array.prototype, 'map');
      const filterSpy = cy.spy(Array.prototype, 'filter');
      const reduceSpy = cy.spy(Array.prototype, 'reduce');

      expect(forEachSpy).to.be.callCount(0);
      expect(mapSpy).to.be.callCount(0);
      expect(filterSpy).to.be.callCount(0);
      expect(reduceSpy).to.be.callCount(0);
    });
  });

  describe('Problem 10', function () {
    it('should create function faReduce that works like Array.prototype.reduce', function () {
      expect(
        faReduce([], function (acc: number, x: number) {
          return acc + x;
        })
      ).to.equal(undefined);

      expect(
        faReduce(
          [],
          function (acc: number, x: number) {
            return acc + x;
          },
          0
        )
      ).to.equal(0);

      expect(
        faReduce([1, 2, 3, 4], function (acc: number, x: number) {
          return acc + x;
        })
      ).to.equal(10);

      expect(
        faReduce(
          [1, 2, 3, 4],
          function (acc: number, x: number) {
            return acc + x;
          },
          0
        )
      ).to.equal(10);

      expect(
        faReduce([1, 2, 3, 4], function (acc: number, x: number) {
          return acc * x;
        })
      ).to.equal(24);

      expect(
        faReduce(
          [1, 2, 3, 4],
          function (acc: number, x: number) {
            return acc * x;
          },
          0
        )
      ).to.equal(0);

      const forEachSpy = cy.spy(Array.prototype, 'forEach');
      const mapSpy = cy.spy(Array.prototype, 'map');
      const filterSpy = cy.spy(Array.prototype, 'filter');
      const reduceSpy = cy.spy(Array.prototype, 'reduce');

      expect(forEachSpy).to.be.callCount(0);
      expect(mapSpy).to.be.callCount(0);
      expect(filterSpy).to.be.callCount(0);
      expect(reduceSpy).to.be.callCount(0);
    });
  });

  describe('Problem 11', function () {
    let forEachSpy: any;
    let mapSpy: any;
    let filterSpy: any;
    let reduceSpy: any;

    beforeEach(function () {
      forEachSpy = cy.spy(Array.prototype, 'forEach');
      mapSpy = cy.spy(Array.prototype, 'map');
      filterSpy = cy.spy(Array.prototype, 'filter');
      reduceSpy = cy.spy(Array.prototype, 'reduce');
    });

    it('should implement map using function reduce', function () {
      const sourceFile = createSourceFile(
        'problem1101',
        problem1101.toString(),
        ScriptTarget.Latest
      );

      const forStatement = countBy(
        sourceFile,
        (node) => node.kind === SyntaxKind.ForStatement
      );
      expect(forStatement).to.be.equal(0, 'should not use for loop');

      const forInStatement = countBy(
        sourceFile,
        (node) => node.kind === SyntaxKind.ForInStatement
      );
      expect(forInStatement).to.be.equal(0, 'should not use for-in loop');

      const forOfStatement = countBy(
        sourceFile,
        (node) => node.kind === SyntaxKind.ForOfStatement
      );
      expect(forOfStatement).to.be.equal(0, 'should not use for-of loop');

      const whileStatement = countBy(
        sourceFile,
        (node) => node.kind === SyntaxKind.WhileStatement
      );
      expect(whileStatement).to.be.equal(0, 'should not use while loop');

      const doStatement = countBy(
        sourceFile,
        (node) => node.kind === SyntaxKind.DoStatement
      );
      expect(doStatement).to.be.equal(0, 'should not use do/while loop');

      const reduceCall = countBy(
        sourceFile,
        (node) =>
          node.kind === SyntaxKind.CallExpression &&
          ((node as CallExpression).expression as Identifier)?.escapedText
            ?.toString()
            .startsWith('faReduce')
      );
      expect(reduceCall).to.not.be.equal(0, 'should use function reduce');

      expect(
        problem1101([], function (x: number) {
          return x * 2;
        })
      ).to.be.deep.equal([]);

      expect(
        problem1101([1, 2, 3, 4], function (x: number) {
          return x * 2;
        })
      ).to.be.deep.equal([2, 4, 6, 8]);

      expect(forEachSpy).to.be.callCount(0);
      expect(mapSpy).to.be.callCount(0);
      expect(filterSpy).to.be.callCount(0);
      expect(reduceSpy).to.be.callCount(0);
    });

    it('should implement filter using function reduce', function () {
      const sourceFile = createSourceFile(
        'problem1102',
        problem1102.toString(),
        ScriptTarget.Latest
      );

      const forStatement = countBy(
        sourceFile,
        (node) => node.kind === SyntaxKind.ForStatement
      );
      expect(forStatement).to.be.equal(0, 'should not use for loop');

      const forInStatement = countBy(
        sourceFile,
        (node) => node.kind === SyntaxKind.ForInStatement
      );
      expect(forInStatement).to.be.equal(0, 'should not use for-in loop');

      const forOfStatement = countBy(
        sourceFile,
        (node) => node.kind === SyntaxKind.ForOfStatement
      );
      expect(forOfStatement).to.be.equal(0, 'should not use for-of loop');

      const whileStatement = countBy(
        sourceFile,
        (node) => node.kind === SyntaxKind.WhileStatement
      );
      expect(whileStatement).to.be.equal(0, 'should not use while loop');

      const doStatement = countBy(
        sourceFile,
        (node) => node.kind === SyntaxKind.DoStatement
      );
      expect(doStatement).to.be.equal(0, 'should not use do/while loop');

      const reduceCall = countBy(
        sourceFile,
        (node) =>
          node.kind === SyntaxKind.CallExpression &&
          ((node as CallExpression).expression as Identifier)?.escapedText
            ?.toString()
            .startsWith('faReduce')
      );
      expect(reduceCall).to.not.be.equal(0, 'should use function reduce');

      expect(
        problem1102([], function (x: number) {
          return x % 2 === 0;
        })
      ).to.be.deep.equal([]);

      expect(
        problem1102([1, 2, 3, 4], function (x: number) {
          return x % 2 === 0;
        })
      ).to.be.deep.equal([2, 4]);

      expect(forEachSpy).to.be.callCount(0);
      expect(mapSpy).to.be.callCount(0);
      expect(filterSpy).to.be.callCount(0);
      expect(reduceSpy).to.be.callCount(0);
    });
  });

  describe('Problem 13', function () {
    it('should use Array.prototype.reduce to implement function getProp', function () {
      const student = {
        name: 'Nguyen Van A',
        addresses: [
          {
            type: 'personal',
            location: 'Hanoi'
          },
          {
            type: 'work',
            location: 'Hoa Lac'
          }
        ],
        clazz: {
          frontend: {
            name: 'Angular'
          }
        }
      };

      const reduceSpy = cy.spy(Array.prototype, 'reduce');

      expect(getProp(student, 'name')).to.equal('Nguyen Van A');
      expect(getProp(student, 'addresses.0.location')).to.equal('Hanoi');
      expect(getProp(student, 'clazz.frontend.name')).to.equal('Angular');
      expect(getProp(student, 'hobbbies.name')).to.equal(undefined);

      expect(reduceSpy).to.be.callCount(4);
    });
  });
});

function countBy(node: Node, predicate: (node: Node) => boolean) {
  let result = 0;

  function visitAndCount(node: Node) {
    if (!node) {
      return;
    }

    if (predicate(node)) {
      result += 1;
    }

    node.forEachChild(visitAndCount);
  }

  node.forEachChild(visitAndCount);

  return result;
}

export {};
