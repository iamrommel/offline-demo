functionReplacer = (key, value) => {
  if (typeof(value) === 'function') {
    return value.toString()
  }
  return value
}

functionReviver = (key, value) => {
  if (key === '') return value

  if (typeof value === 'string') {
    const rfunc = /function[^\(]*\(([^\)]*)\)[^\{]*{([^\}]*)\}/,
      match = value.match(rfunc)

    if (match) {
      const args = match[1].split(',').map(function (arg) {
        return arg.replace(/\s+/, '')
      })
      return new Function(args, match[2])
    }
  }
  return value
}
