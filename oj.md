###填充输出  
    #include<iomanip>
    cout << setw(2) << setfill('0') << _string;

###保留小数
    #include<iomanip>
    setiosflags(ios::fixed) << setprecision(2) << _float;

###快速cin
    ios::sync_with_stdio(false);

###读取一行
    getline(cin, _string);

###分割字符串空格
    #include<sstream>
    #include<string>
    istringstream s(_string);
    while (s >> _string)
    	cout << _string;

###反转字符串
    #include<algorithm>
    reverse(_str.begin(), _str.end());

###快速回文
    bool pali(string s) { //palindromic
    	int c = s.length() / 2; // center
    	string fr = s.substr(0, s.length() - o); //front
    	string ba = s.substr(c, s.length() - o); //back
    	reverse(ba.begin(), ba.end());
    	return (ba == fr);
    }

###int转字符串
    #include<string>
    to_string(_int);
    
###字符串转int
	atoi(_string.c_str());

###快速pow
	递归待整理

###优先级队列	
	#include<queue>
	//大顶堆
	priority_queue<int> _q; 
	priority_queue<int, vector<int>, less<int>> _q;
	//小顶堆
	priority_queue<int, vector<int>, greater<int>> _q;
	//修改第三个参数
	struct cmp {
		bool operator() (int a, int b) {
			return a < b;
		}
	};