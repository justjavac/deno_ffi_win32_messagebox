import { cstr2ptr } from "https://deno.land/x/ffi/mod.ts";

/** The message box contains two push buttons: **Yes** and **No**. */
const MB_YESNO = 0x00000004;
/** An exclamation-point icon appears in the message box. */
const MB_ICONWARNING = 0x00000030;

/** The **Yes** button was selected. */
const IDYES = 6;
/** The **No** button was selected. */
const IDNO = 7;

const lib = Deno.dlopen("User32.dll", {
  MessageBoxA: {
    parameters: ["pointer", "pointer", "pointer", "u64"],
    result: "i32",
  },
});

const msgboxID = lib.symbols.MessageBoxA(
  new Deno.UnsafePointer(0n),
  cstr2ptr("Hello World"),
  cstr2ptr("Deno FFI"),
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
