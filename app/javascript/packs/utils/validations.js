function required(value) {
  return (value ? undefined : "Required");
}

const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

function email(value) {
  return (value && re.test(value) ? undefined : "Invalid")
}

function min(length) {
  return value => {
    return (value && value.length < length
      ? `Must be at least ${length}`
      : undefined
    );
  };
}

function max(length) {
  return value => {
    return (value && length < value.length
      ? `Must be at most ${length}`
      : undefined
    );
  };
}

function confirm(password) {
  return value => {
    return (password === value ? undefined : "Does not match password");
  };
}

export {
  required,
  email,
  min,
  max,
  confirm,
}
