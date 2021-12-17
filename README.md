# deno_ffi_win32_messagebox

Displays a modal dialog box that contains a system icon, a set of buttons, and a
brief application-specific message, such as status or error information. The
message box returns an integer value that indicates which button the user
clicked.

Run:

```bash
deno run --allow-read --allow-write --allow-net --allow-ffi --unstable https://cdn.jsdelivr.net/gh/deno_ffi_win32_messagebox@main/mod.ts
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
