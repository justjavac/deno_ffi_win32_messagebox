/**
 * Windows represents Unicode characters using UTF-16 encoding, in which each
 * character is encoded as a 16-bit value.
 * UTF-16 characters are called **wide** characters, to distinguish them from
 * 8-bit ANSI characters.
 *
 * Windows providing two parallel sets of APIs, one for ANSI strings and the
 * other for Unicode strings. For example, there are two functions to displays
 * a modal dialog box:
 *
 * - `MessageBoxA` - takes an ANSI string.
 * - `MessageBoxW` - takes a Unicode string.
 *
 * Javascript already uses UTF-16 internally - use `charCodeAt()`  to get the values.
 */
export function cstr2ptrW(cstr: string) {
  const buffer = new ArrayBuffer((cstr.length + 1) * 2);
  const u16 = new Uint16Array(buffer);
  for (let i = 0; i <= cstr.length; i++) {
    u16[i] = cstr.charCodeAt(i);
  }
  return Deno.UnsafePointer.of(u16);
}

/** The message box contains two push buttons: **Yes** and **No**. */
const MB_YESNO = 0x00000004;
/** An exclamation-point icon appears in the message box. */
const MB_ICONWARNING = 0x00000030;

/** The **Yes** button was selected. */
const IDYES = 6;
/** The **No** button was selected. */
const IDNO = 7;

const lib = Deno.dlopen("User32.dll", {
  MessageBoxW: {
    parameters: ["pointer", "pointer", "pointer", "u64"],
    result: "i32",
  },
});

const msgboxID = lib.symbols.MessageBoxW(
  new Deno.UnsafePointer(0n),
  cstr2ptrW("Hello World\n你好，世界\nこんにちは世界\nBonjour le monde\nمرحبا بالعالم"),
  cstr2ptrW("Deno FFI"),
  MB_YESNO | MB_ICONWARNING,
) as number;

switch (msgboxID) {
  case IDYES:
    console.log("yes");
    break;
  case IDNO:
    console.log("no");
    break;
  default:
    console.error("unreachable");
}
