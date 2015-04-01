## GET /companies

```
{
  collection: [{
    id: 1,
    name: 'Pluralsight'
  },{
    id: 2,
    name: 'Apple'
  },{
    id: 3,
    name: 'Microsoft'
  }],
  meta: {
    count: 3
  }
}
```

## GET /companies/:id

```
{
  id: 1,
  name: 'Pluralsight'
}
```

## GET /companies/:company_id/users

```
{
  collection: [{
    id: 1,
    first_name: 'Dane',
    last_name: 'Thurber'
  }],
  meta: {
    count: 1
  }
}
```
