## 前言 📢

本日记为个人的刷题学习日记，内容非原创，仅为自己复习知识时，能够看得懂自己~~写的~~CV的代码，快速理解题意。另外，👍<a href="https://leetcode-cn.com/u/leetcode-solution/">力扣官方的题解</a>很好用，<a href="https://leetcode-cn.com/u/ac_oier/">三叶姐</a>🍭nb！！！！！



<br>

## 15. 三数之和 ✅



### 题意

- 给你一个包含`n`个整数的数组`nums`
- 判断`nums`中是否存在a，b，c，使得`a + b + c == 0`
- 找出所有满足条件的三数组合`[a, b, c]`，不可以包含重复的数组

<br>

### 思路

- 排序 + 双指针

```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> lists = new ArrayList<>();
        // 排序
        Arrays.sort(nums);
        // 双指针
        int len = nums.length;
        for(int i = 0; i < len; i++) {
            // 如果当前 第一个数大于0 那么 后续第二第三个数一定也大于零 
            // 三数之和一定大于零 不存在可能组合 跳出
            if(nums[i] > 0)     return lists;
            // 如果当前第一个数 和 移动前第一个数相等 那么会出现重复组合 跳过
            if(i > 0 && nums[i] == nums[i-1]) continue;
			
            
            int curr = nums[i];
            int L = i + 1, R = len - 1;
            while(L < R) {
                int tmp = curr + nums[R] + nums[L];
                if(tmp == 0) {
                    List<Integer> list = new ArrayList<>();
                    list.add(curr);
                    list.add(nums[L]);
                    list.add(nums[R]);
                    lists.add(list);

                    while(L < R && nums[L+1] == nums[L]) L++; 	// 第二个数前移 如果相等就再移动一位
                    while(L < R && nums[R-1] == nums[R]) R--;	// 第三个数后移 如果相等就再移动
                    // 针对数值不同的情况 二数左移 三数右移一位
                    L++;
                    R--;

                } else if (tmp < 0) {
                    L++;
                } else {
                    R--;
                }
            }
        }
        return lists;
    }
}
```

<br>

## 6060 找到最接近零的数字 ✅



### 题意

- 给你一个长度为n的数组，返回这个数组中离0最近的数字
- 如果出现距离相同的情况，返回数值大的一方，如1和-1 返回1

<br>

### 思路

```java
// 根据题意进行模拟即可 一次for循环，记录当前值与存储值举例0的距离
class Solution {
    public int findClosestNumber(int[] nums) {
        int temp = Integer.MAX_VALUE;
        int len = nums.length;
        for(int i=0; i < len; i++) {
            // 如果距离小 替换存储值
            if(Math.abs(nums[i]) < Math.abs(temp)) {
                temp = nums[i];
            } else if(Math.abs(nums[i]) == Math.abs(temp)) {	// 如果距离相等 返回数值大的一方
                temp = temp > nums[i] ? temp : nums[i];
            } 
        }
        return temp;
    }
}
```

<br>

## 6061 买钢笔和铅笔的方案数 ✅



### 题意

- 给你一个整数total表示拥有的总钱数，分别用cost1和cost2表示钢笔和铅笔的单价
- 可以花费部分或者全部的金钱，买任意数目的两张笔
- ```1 <= total, cost1, cost2 <= 1e6```

<br>

### 思路

- 这里的任意数目可以为零，即 可以一分不花什么都不买回家，算作一种方案
- 根据题意模拟，注意特殊情况 `1e6, 1, 1`

```java
class Solution {
    public long waysToBuyPensPencils(int total, int cost1, int cost2) {
        int m = total / cost1;
        // 避免特殊情况 总方案数溢出 int
        long sum = 0;
        // 总钱数不够 直接回家
        if(total < cost1 && total < cost2) return 1;
	
        for(int i = 0; i <= m; i++) {
            // 由于不买也算一种方案 故遍历 cnt的初始值为 1
            int cnt = 1;
            cnt += (total - cost1 * i) / cost2;
            sum += cnt;
        }
        return sum;
    }
}
```

<br>

## 6080 计算字符串的数字和 ✅



### 题意

- 给你一个由若干数字（`0` - `9`）组成的字符串 `s` ，和一个整数。如果 `s` 的长度大于 `k` ，则可以执行一轮操作。在一轮操作中，需要完成以下工作：
  - 将 `s` **拆分** 成长度为 `k` 的若干 **连续数字组** ，使得前 `k` 个字符都分在第一组，接下来的 `k` 个字符都分在第二组，依此类推。**注意**，最后一个数字组的长度可以小于 `k` 。
  - 用表示每个数字组中所有数字之和的字符串来 **替换** 对应的数字组。例如，`"346"` 会替换为 `"13"` ，因为 `3 + 4 + 6 = 13` 。
  - **合并** 所有组以形成一个新字符串。如果新字符串的长度大于 `k` 则重复第一步。

- 返回在完成所有轮操作后的 `s` 。
- **简单说**，给你一个字符串，需要不停地把它切分成长度为 `k` 的小段，最后一小段可以长度小于 `k`，每次切分好后，需要**计算每小段的代数和**，然后把它们**作为字符串按顺序拼接起来**，继续操作，知道拼接后的字符串小于 `k`

<br>

### 思路

- 使用递归的方法，说明每次相同的操作及结束条件
- 巩固字符串不熟悉的知识

```java
// 小切片的操作是重复的 使用递归的思路
class Solution {
    public String digitSum(String s, int k) {
        // 返回判断 如果当前字符串的长度 小于 所给定的长度k 返回
        if(s.length() <= k) {
            return s;
        }

        // java 新建一个string的函数 StringBuilder
        StringBuilder sb = new StringBuilder();
        // 定义 数字串的长度 len
        int len = s.length();
        for(int i = 0; i < len; i+=k) {
            // 定义 长度为k的小切片的和 sum
            int sum = 0;
            for(int j = 0; j < k && j + i < len; j++) {
                // 计算切片和
                sum += (s.charAt(j + i) - '0');
            }
            sb.append(sum);
        }
        // 递归 整体合并为一个字符串 继续进行切片处理
        return digitSum(sb.toString(), k);
    }
}
```

<br>

### 知识点

- StringBuilder

1. 此类提供与`StringBuffer`兼容的API，但**不保证同步**。 此类设计用作`StringBuffer`替代品，用于单个线程使用字符串缓冲区的位置（通常情况下）。 在可能的情况下，建议使用此类优先于`StringBuffer`，因为在大多数实现中它会更快。`StringBuilder`上的主要操作是`append`和`insert`方法，它们被重载以便接受任何类型的数据。 每个都有效地将给定的数据转换为字符串，然后将该字符串的字符追加或插入到字符串构建器中。 `append`方法始终在构建器的末尾添加这些字符; `insert`方法在指定点添加字符。
2. 简单说，它与`StringBuffer`的构造方法相似，并且单个线程比其更快。就是`StringBuild`不能同步访问。

![知识点1](https://vip2.loli.io/2022/04/25/IoZz2NQtqaMfbGs.png)

<br>

## 6071 完成所有任务所需要的最小轮数 ✅



### 题意

- 给你一个下标从 **0** 开始的整数数组 `tasks` ，其中 `tasks[i]` 表示任务的难度级别。在每一轮中，你可以完成 2 个或者 3 个 **相同难度级别** 的任务。
- 返回完成所有任务需要的 **最少** 轮数，如果无法完成所有任务，返回 `-1` 。

<br>

### 思路

```java
// 哈希表 + 贪心
class Solution {
    public int minimumRounds(int[] tasks) {
        // 累加器 统计总和
        int ans = 0;

        // 用哈希表记录 相同难度级别任务的个数
        Map<Integer, Integer> cntMap = new HashMap<>();
        for(int task : tasks) {
            cntMap.put(task, cntMap.getOrDefault(task, 0) + 1);
        }

        for(int val : cntMap.values()) {
            if(val == 1) {
                return -1;
            }
            // 遇到刚好被三整除的情况 相除的结果等于方案数
            if(val % 3 == 0) {
                ans += val / 3;
            } else {    
                // 不能被三整除的情况 比如 4 5 7 8 他们的方案数 都是 商的值加1
                ans += val / 3 + 1;
            }
        }
        return ans;
    }
}
```

<br>

### 知识点

- 哈希表

  1. HashMap 的 key 与 value 类型**可以相同也可以不同**，可以是字符串（String）类型的 key 和 value，也可以是整型（Integer）的 key 和字符串（String）类型的 value。它和python的字典有些相似，但它们仍有区别。

  2. 可以使用 for-each 来迭代 HashMap 中的元素。如果你只想获取 key，可以使用 keySet() 方法，然后可以通过 get(key) 获取对应的 value，如果你只想获取 value，可以使用 values() 方法。与本题哈希表的遍历相同。

     ```java
     import java.util.HashMap;
     
     public class RunoobTest {
         public static void main(String[] args) {
             // 创建 HashMap 对象 Sites
             HashMap<Integer, String> Sites = new HashMap<Integer, String>();
             // 添加键值对
             Sites.put(1, "Google");
             Sites.put(2, "Runoob");
             Sites.put(3, "Taobao");
             Sites.put(4, "Zhihu");
             // 输出 key 和 value
             for (Integer i : Sites.keySet()) {
                 System.out.println("key: " + i + " value: " + Sites.get(i));
             }
             // 返回所有 value 值
             for(String value: Sites.values()) {
               // 输出每一个value
               System.out.print(value + ", ");
             }
         }
     }
     ```

     













