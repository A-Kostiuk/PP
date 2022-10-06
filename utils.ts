export const storage = {
  setItem(name: string, item: any) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(name, JSON.stringify(item));
    }
  },
  getItem(name: string) {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(name);
      if (item) {
        return JSON.parse(item);
      }
    }
  },
};

export const debounce = (n: number, fn: (...params: any[]) => any, immed: boolean = false) => {
  let timer: NodeJS.Timer;
  return function (this: any, ...args: any[]) {
    if (timer === undefined && immed) {
      fn.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), n);
    return timer;
  };
};
