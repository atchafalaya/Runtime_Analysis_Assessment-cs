Push appears to scale better than Unshift. Unshift has a complexity of O(n) where Push has a complexity of O(n). This is because Push only has to add an element to the end of an array, where Unshift has to reassign index values to each element in the array as it adds a new element to the front of the array.

|  Table  |  Timing Result Insert  |  Timing Result Append  |
|---|---|---|
|Tiny array|39.2 microseconds|103.7 microseconds|
|Small array|84.0 microseconds|193.8 microseconds|
|Medium array|216.4 microseconds|161.6 microseconds|
|Large array|10.13 milliseconds|659.9 microseconds|
|Extra large array|1.13 seconds|4.06 milliseconds|
|XXL array|37.9 seconds|11.59 milliseconds|