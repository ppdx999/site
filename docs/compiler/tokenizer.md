---
sidebar_position: 1
---

# Tokenizer

## Implementation sample

```typescript title="tokenize.ts"
type Token = {
  type: 'Reserved' | 'Number' | 'EOF'
  value: string
  next: Token | null | undefined
}


function tokenize(input: string): Token {
    let head = {
        type: 'Reserved',
        value: '',
        next: null
    }
    let token = head
    
    while (!atEOF(input)) {
        let char = input[current]
        
        if (char === '+') {
            token.next = {
                type: 'Reserved',
                value: '+',
                next: null
            }
        } else if (char === '-') {
            token.next = {
                type: 'Reserved',
                value: '-',
                next: null
            }
        } else if (/[0-9]/.test(char)) {
            let value = ''
            while (/[0-9]/.test(char)) {
                value += char
                char = input[++current]
            }
            token.next = {
                type: 'Number',
                value,
                next: null
            }
        } else {
            throw new Error('unexpected character')
        }

        token = token.next
    }

    token.next = {
        type: 'EOF',
        value: '',
        next: null
    }

    return head.next
```
