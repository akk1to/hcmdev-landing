import { CodeBlock, type Language, createCssVariablesTheme } from "basehub/react-code-block"

import { fragmentOn } from "basehub"

import { CopyButton } from "./copy-button"
import { languagesIcons } from "./language"
import { FileIcon } from "@radix-ui/react-icons"
import s from "./code-snippet.module.css"

export const codeSnippetFragment = fragmentOn("CodeSnippetComponent", {
  _id: true,
  code: {
    code: true,
    language: true,
  },
  _title: true,
})

export type CodeSnippetFragment = fragmentOn.infer<typeof codeSnippetFragment>

export function CodeSnippet({ code, _id, _title = "Untitled" }: CodeSnippetFragment) {
  return (
    <div
      className={`${s["code-snippet"]} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 relative group animate-fade-in-up`}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-border blur-sm"></div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

      <div className="relative z-10">
        <CodeBlock
          childrenTop={
            <header
              className={`${s.header} bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 backdrop-blur-sm relative overflow-hidden group-hover:animate-shimmer-header`}
            >
              {/* Header glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>

              <div className="flex items-center relative z-10">
                <span className="mr-2 size-4 animate-bounce-gentle group-hover:animate-spin">
                  {languagesIcons[code.language as Language] ?? <FileIcon />}
                </span>
                <span className="text-[--text-secondary] dark:text-[--dark-text-secondary] font-medium bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                  {_title}
                </span>
              </div>
              <div className="relative z-10">
                <CopyButton code={code.code} />
              </div>
            </header>
          }
          components={{
            div: ({ children, ...rest }) => (
              <div
                className={`${s.content} bg-gradient-to-br from-gray-50/80 via-white/90 to-gray-100/80 dark:from-gray-900/80 dark:via-gray-800/90 dark:to-gray-900/80 backdrop-blur-sm relative overflow-hidden`}
                {...rest}
              >
                {/* Code content glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">{children}</div>

                {/* Scanning line effect */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
              </div>
            ),
          }}
          lineNumbers={{
            className:
              "line-indicator opacity-40 hover:opacity-100 transition-all duration-300 group-hover:animate-pulse-subtle",
          }}
          snippets={[{ code: code.code, language: code.language as Language, id: _id }]}
          theme={theme}
        />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-twinkle"></div>
      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-twinkle-delayed"></div>
    </div>
  )
}

const theme = createCssVariablesTheme({
  name: "css-variables",
  variablePrefix: "--shiki-",
  variableDefaults: {},
  fontStyle: true,
})
