# react-tree-condition

## Install
```
npm i --save react-pretty-condition
```

## IF Condition Props

| Props        | Type         | Required  | default  | Description  |
| ------------- |:-------------:| -----:| -----:| -----:|
| condition      | Boolean | yes | - | Ex: 1 === 1 ? true : false |

## Switch Condition Props

| Props        | Type         | Required  | default  | Description  |
| ------------- |:-------------:| -----:| -----:| -----:|
| value      | Any | yes | - | Ex: 'A' |

## Case Condition Props

| Props        | Type         | Required  | default  | Description  |
| ------------- |:-------------:| -----:| -----:| -----:|
| value      | Any | yes | - | 'A'  |

## Import for using

```javascript
import {
  If,
  Switch,
  Case
} from 'react-pretty-treeview';
```

### Condition

```javascript
 <If condition={ 1 === 1 ? true : false  }>
  <div>Test If Condition</div>
 </If>

 <Switch value="A">
  <Case value="A">
    <div>Test Switch Condition</div>
  </Case>
  <Case value="B">
    <div>Test Switch Condition</div>
  </Case>
 </Switch>
```
