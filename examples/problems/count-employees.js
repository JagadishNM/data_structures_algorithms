let arr = [{
    name: 'xyz',
    company: 'VMware',
    place: 'Bengaluru'
},
{
    name: 'zyx',
    company: 'VMware',
    place: 'Bengaluru'
},
{
    name: 'abc',
    company: 'VMware',
    place: 'Bengaluru'
},
{
    name: 'def',
    company: 'VMware',
    place: 'Bengaluru'
},
{
  name: 'rrt',
  company: 'Microsoft',
  place: 'Bengaluru'
},
{
    name: 'efg',
    company: 'Microsoft',
    place: 'Hyderabad'
},
{
    name: 'hij',
    company: 'Microsoft',
    place: 'Hyderabad'
},
{
    name: 'lkm',
    company: 'Persistent',
    place: 'Pune'
},
{
    name: 'nop',
    company: 'Persistent',
    place: 'Pune'
},
{
    name: 'qrs',
    company: 'Adobe',
    place: 'Noida'
},
{
    name: 'tuv',
    company: 'Adobe',
    place: 'Noida'
},
{
    name: 'wxc',
    company: 'Adobe',
    place: 'Noida'
},
{
    name: 'layman1',
    company: 'TCS',
    place: 'Mumbai'
},
{
    name: 'layman2',
    company: 'TCS',
    place: 'Mumbai'
},
{
    name: 'layman3',
    company: 'Wipro',
    place: 'Chennai'
},
{
    name: 'layman4',
    company: 'Wipro',
    place: 'Chennai'
}]

function countEmployees(arr){
    let res = arr.reduce((acc, cur) => {
          const val = acc.get(cur.place)
          val ? val.count ++ : acc.set(cur.place, {...cur, count: 1})
          return acc
        }, new Map)
        .values();

        return [...res]
}

console.log(countEmployees(arr))