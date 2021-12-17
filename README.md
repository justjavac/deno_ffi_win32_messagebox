# deno_ffi_win32_messagebox

Displays a modal dialog box that contains a system icon, a set of buttons, and a
brief application-specific message, such as status or error information. The
message box returns an integer value that indicates which button the user
clicked.

Run:

```bash
deno run --allow-read --allow-ffi --unstable https://cdn.jsdelivr.net/gh/justjavac/deno_ffi_win32_messagebox@main/mod.ts
```

Or run local:

```bash
git clone git@github.com:justjavac/deno_ffi_win32_messagebox.git
cd deno_ffi_win32_messagebox
deno run --allow-read --allow-ffi --unstable mod.ts
```

---

See:
<https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-messagebox>

```cpp
// C++
int MessageBox(
  [in, optional] HWND    hWnd,
  [in, optional] LPCTSTR lpText,
  [in, optional] LPCTSTR lpCaption,
  [in]           UINT    uType
);
```
