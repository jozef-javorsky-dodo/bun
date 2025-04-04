import { define, InvalidThisBehavior } from "../../codegen/class-definitions";

export default [
  define({
    name: "DNSResolver",
    construct: false,
    noConstructor: true,
    finalize: true,
    configurable: false,
    klass: {},
    proto: {
      setServers: {
        fn: "setServers",
        length: 1,
      },
      getServers: {
        fn: "getServers",
        length: 0,
      },
      resolve: {
        fn: "resolve",
        length: 3,
      },
      resolveSrv: {
        fn: "resolveSrv",
        length: 1,
      },
      resolveTxt: {
        fn: "resolveTxt",
        length: 1,
      },
      resolveSoa: {
        fn: "resolveSoa",
        length: 1,
      },
      resolveNaptr: {
        fn: "resolveNaptr",
        length: 1,
      },
      resolveMx: {
        fn: "resolveMx",
        length: 1,
      },
      resolveCaa: {
        fn: "resolveCaa",
        length: 1,
      },
      resolveNs: {
        fn: "resolveNs",
        length: 1,
      },
      resolvePtr: {
        fn: "resolvePtr",
        length: 1,
      },
      resolveCname: {
        fn: "resolveCname",
        length: 1,
      },
      resolveAny: {
        fn: "resolveAny",
        length: 1,
      },
      setLocalAddress: {
        fn: "setLocalAddress",
        length: 1,
      },
      cancel: {
        fn: "cancel",
        length: 0,
      },
      reverse: {
        fn: "reverse",
        length: 1,
      },
    },
  }),
  define({
    name: "FSWatcher",
    construct: false,
    noConstructor: true,
    finalize: true,
    configurable: false,
    hasPendingActivity: true,
    klass: {},
    JSType: "0b11101110",
    proto: {
      ref: {
        fn: "doRef",
        length: 0,
      },
      unref: {
        fn: "doUnref",
        length: 0,
      },
      hasRef: {
        fn: "hasRef",
        length: 0,
      },
      close: {
        fn: "doClose",
        length: 0,
      },
    },
    values: ["listener"],
  }),
  define({
    name: "StatWatcher",
    construct: false,
    noConstructor: true,
    finalize: true,
    configurable: false,
    hasPendingActivity: true,
    klass: {},
    JSType: "0b11101110",
    proto: {
      ref: {
        fn: "doRef",
        length: 0,
      },
      unref: {
        fn: "doUnref",
        length: 0,
      },
      close: {
        fn: "doClose",
        length: 0,
      },
    },
    values: ["listener"],
  }),
  define({
    name: "Timeout",
    construct: true,
    finalize: true,
    configurable: false,
    klass: {},
    JSType: "0b11101110",
    proto: {
      ref: {
        fn: "doRef",
        length: 0,
        invalidThisBehavior: InvalidThisBehavior.NoOp,
      },
      refresh: {
        fn: "doRefresh",
        length: 0,
        invalidThisBehavior: InvalidThisBehavior.NoOp,
      },
      unref: {
        fn: "doUnref",
        length: 0,
        invalidThisBehavior: InvalidThisBehavior.NoOp,
      },
      hasRef: {
        fn: "hasRef",
        length: 0,
        invalidThisBehavior: InvalidThisBehavior.NoOp,
      },
      ["@@toPrimitive"]: {
        fn: "toPrimitive",
        length: 1,
        invalidThisBehavior: InvalidThisBehavior.NoOp,
      },
      _destroyed: {
        getter: "getDestroyed",
      },
      ["@@dispose"]: {
        fn: "dispose",
        length: 0,
        invalidThisBehavior: InvalidThisBehavior.NoOp,
      },
    },
    values: ["arguments", "callback"],
  }),
  define({
    name: "Immediate",
    construct: true,
    finalize: true,
    configurable: false,
    klass: {},
    JSType: "0b11101110",
    proto: {
      ref: {
        fn: "doRef",
        length: 0,
        invalidThisBehavior: InvalidThisBehavior.NoOp,
      },
      unref: {
        fn: "doUnref",
        length: 0,
        invalidThisBehavior: InvalidThisBehavior.NoOp,
      },
      hasRef: {
        fn: "hasRef",
        length: 0,
        invalidThisBehavior: InvalidThisBehavior.NoOp,
      },
      ["@@toPrimitive"]: {
        fn: "toPrimitive",
        length: 1,
        invalidThisBehavior: InvalidThisBehavior.NoOp,
      },
      _destroyed: {
        getter: "getDestroyed",
      },
      ["@@dispose"]: {
        fn: "dispose",
        length: 0,
        invalidThisBehavior: InvalidThisBehavior.NoOp,
      },
    },
    values: ["arguments", "callback"],
  }),
  define({
    name: "NodeJSFS",
    construct: true,
    noConstructor: true,
    finalize: true,

    klass: {},
    proto: {
      appendFile: { fn: "appendFile", length: 4 },
      appendFileSync: { fn: "appendFileSync", length: 3 },
      access: { fn: "access", length: 3 },
      accessSync: { fn: "accessSync", length: 2 },
      chown: { fn: "chown", length: 4 },
      chownSync: { fn: "chownSync", length: 3 },
      chmod: { fn: "chmod", length: 3 },
      chmodSync: { fn: "chmodSync", length: 2 },
      close: { fn: "close", length: 1 },
      closeSync: { fn: "closeSync", length: 1 },
      copyFile: { fn: "copyFile", length: 4 },
      copyFileSync: { fn: "copyFileSync", length: 3 },

      // TODO:
      cp: { fn: "cp", length: 2 },
      cpSync: { fn: "cpSync", length: 2 },

      exists: { fn: "exists", length: 2 },
      existsSync: { fn: "existsSync", length: 1 },
      fchown: { fn: "fchown", length: 4 },
      fchownSync: { fn: "fchownSync", length: 3 },
      fchmod: { fn: "fchmod", length: 3 },
      fchmodSync: { fn: "fchmodSync", length: 2 },
      fdatasync: { fn: "fdatasync", length: 2 },
      fdatasyncSync: { fn: "fdatasyncSync", length: 1 },
      fstat: { fn: "fstat", length: 1 },
      fstatSync: { fn: "fstatSync", length: 1 },
      fsync: { fn: "fsync", length: 2 },
      fsyncSync: { fn: "fsyncSync", length: 1 },
      ftruncate: { fn: "ftruncate", length: 1 },
      ftruncateSync: { fn: "ftruncateSync", length: 1 },
      futimes: { fn: "futimes", length: 4 },
      futimesSync: { fn: "futimesSync", length: 3 },
      lchown: { fn: "lchown", length: 4 },
      lchownSync: { fn: "lchownSync", length: 3 },
      lchmod: { fn: "lchmod", length: 3 },
      lchmodSync: { fn: "lchmodSync", length: 2 },
      link: { fn: "link", length: 3 },
      linkSync: { fn: "linkSync", length: 2 },
      lstat: { fn: "lstat", length: 1 },
      lstatSync: { fn: "lstatSync", length: 1 },
      lutimes: { fn: "lutimes", length: 4 },
      lutimesSync: { fn: "lutimesSync", length: 3 },
      mkdir: { fn: "mkdir", length: 3 },
      mkdirSync: { fn: "mkdirSync", length: 2 },
      mkdtemp: { fn: "mkdtemp", length: 3 },
      mkdtempSync: { fn: "mkdtempSync", length: 2 },
      open: { fn: "open", length: 4 },
      openSync: { fn: "openSync", length: 3 },
      readdir: { fn: "readdir", length: 3 },
      readdirSync: { fn: "readdirSync", length: 2 },
      read: { fn: "read", length: 6 },
      readSync: { fn: "readSync", length: 5 },
      readv: { fn: "readv", length: 4 },
      readvSync: { fn: "readvSync", length: 3 },
      readFile: { fn: "readFile", length: 3 },
      readFileSync: { fn: "readFileSync", length: 2 },
      readlink: { fn: "readlink", length: 3 },
      readlinkSync: { fn: "readlinkSync", length: 2 },
      realpath: { fn: "realpath", length: 3 },
      realpathSync: { fn: "realpathSync", length: 2 },
      rename: { fn: "rename", length: 3 },
      renameSync: { fn: "renameSync", length: 2 },
      rm: { fn: "rm", length: 3 },
      rmSync: { fn: "rmSync", length: 2 },
      rmdir: { fn: "rmdir", length: 3 },
      rmdirSync: { fn: "rmdirSync", length: 2 },
      stat: { fn: "stat", length: 1 },
      statfs: { fn: "statfs", length: 2 },
      statSync: { fn: "statSync", length: 1 },
      statfsSync: { fn: "statfsSync", length: 2 },
      symlink: { fn: "symlink", length: 4 },
      symlinkSync: { fn: "symlinkSync", length: 3 },
      truncate: { fn: "truncate", length: 3 },
      truncateSync: { fn: "truncateSync", length: 2 },
      unwatchFile: { fn: "unwatchFile", length: 2 },
      unlink: { fn: "unlink", length: 2 },
      unlinkSync: { fn: "unlinkSync", length: 1 },
      utimes: { fn: "utimes", length: 4 },
      utimesSync: { fn: "utimesSync", length: 3 },
      watch: { fn: "watch", length: 3 },
      watchFile: { fn: "watchFile", length: 3 },
      writeFile: { fn: "writeFile", length: 4 },
      writeFileSync: { fn: "writeFileSync", length: 3 },
      write: { fn: "write", length: 6 },
      writeSync: { fn: "writeSync", length: 5 },
      writev: { fn: "writev", length: 4 },
      writevSync: { fn: "writevSync", length: 3 },
      realpathNative: { fn: "realpathNative", length: 3 },
      realpathNativeSync: { fn: "realpathNativeSync", length: 3 },
      Dirent: { getter: "getDirent" },
      Stats: { getter: "getStats" },
    },
  }),
];
