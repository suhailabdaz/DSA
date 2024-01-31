var customNode;
(function (customNode) {
    var Node = /** @class */ (function () {
        function Node(value) {
            this.value = value;
            this.next = null;
            this.prev = null;
        }
        return Node;
    }());
    var midsatck = /** @class */ (function () {
        function midsatck() {
            this.middle = null;
            this.top = null;
            this.size = 0;
        }
        midsatck.prototype.push = function (value) {
            var newnode = new Node(value);
            if (!this.top) {
                this.top = newnode;
            }
            else {
                newnode.next = this.top;
                this.top.prev = newnode;
                this.top = newnode;
            }
            this.size++;
            if (this.size == 1) {
                this.middle = newnode;
            }
            else if (this.size % 2 == 1 && this.size !== 0) {
                this.middle = this.middle.prev;
            }
        };
        midsatck.prototype.themiddle = function () {
            if (this.size == 0) {
                return null;
            }
            else {
                return this.middle.value;
            }
        };
        return midsatck;
    }());
    customNode.midsatck = midsatck;
})(customNode || (customNode = {}));
var stacks = new customNode.midsatck();
stacks.push(2);
stacks.push(8);
stacks.push(34);
stacks.push(56);
stacks.push(89);
console.log(stacks.themiddle());
