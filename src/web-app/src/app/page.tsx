'use client';

import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  Sheet,
  Switch,
} from '@mui/joy';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
// import InfoOutlined from '@mui/icons-material/InfoOutlined';
import React, { ChangeEvent, useState } from 'react';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant='outlined'
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

/**
 * @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/page}
 */
function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // const { mode, setMode } = useColorScheme();

  const [validate, setValidate] = useState(true);
  const [format, setFormat] = useState('13');
  const [separator, setSeparator] = useState('hyphen-minus');

  function handleFormatChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setFormat(value);
    if (separator === 'space' && value === '13') {
      setSeparator('hyphen-minus');
    }
  }

  function handleSeparatorChange(event: ChangeEvent<HTMLInputElement>) {
    setSeparator(event.target.value);
  }

  return (
    <React.Fragment>
      <CssVarsProvider>
        <ModeToggle />
        <Sheet variant='plain'>

          <Grid container columns={12} spacing={2}>
            <Grid sm={12} xs={12}>
              <FormControl error>
                <FormLabel>ISBN</FormLabel>
                <Input
                  placeholder=''
                  required
                  startDecorator=''
                />
                <FormHelperText>
                  {/* <InfoOutlined /> */}
                  10‑ или 13­‑значный идентификатор
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid sm={12} xs={12}>
              <FormControl>
                <FormLabel>Формат</FormLabel>
                <RadioGroup>
                  <Radio
                    checked={format === '10'}
                    label='10­‑разрядный'
                    onChange={handleFormatChange}
                    value='10'
                  />
                  <Radio
                    checked={format === '13'}
                    label='13­‑разрядный'
                    onChange={handleFormatChange}
                    value='13'
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid sm={12} xs={12}>
              <Switch
                // slotProps={{
                //   track: {
                //     children: (
                //       <React.Fragment>
                //         <span>⏽</span>
                //         <span>⭘</span>
                //       </React.Fragment>
                //     ),
                //     sx: {
                //       justifyContent: 'space-around',
                //     },
                //   },
                // }}
                // sx={{
                //   '--Switch-thumbSize': '27px',
                //   '--Switch-trackWidth': '52px',
                //   '--Switch-trackHeight': '31px',
                // }}
                checked={validate}
                endDecorator={validate ? 'Валидировать' : 'Не валидировать'}
                onChange={(event) => setValidate(event.target.checked)}
              // variant='outlined'
              />
            </Grid>
            <Grid sm={12} xs={12}>
              <FormControl>
                <FormLabel>Разделитель элементов</FormLabel>
                <RadioGroup>
                  <FormControl
                    disabled={!validate}
                  >
                    <Radio
                      checked={separator === 'no'}
                      label='Отсутствует'
                      onChange={handleSeparatorChange}
                      slotProps={{ input: { 'aria-describedby': 'no' } }}
                      value='no'
                    />
                    <FormHelperText id='no-separator'>
                      {/* ISO 2108:1970/1978? */}
                      <i lang='en'>ISO 2108:1992/2005/2017</i>.
                    </FormHelperText>
                  </FormControl>

                  <FormControl
                    disabled={!validate || format !== '10'}
                  >
                    <Radio
                      checked={format === '10' && separator === 'space'}
                      label='Пробел (U+0020)'
                      onChange={handleSeparatorChange}
                      slotProps={{ input: { 'aria-describedby': 'space-separator' } }}
                      value='space'
                    />
                    <FormHelperText id='space-separator'>
                      {/* ISO 2108:1970/1978? */}
                      <i lang='en'>ISO 2108:1992</i>. Только для <i lang='en'>ISBN‑10</i>.
                    </FormHelperText>
                  </FormControl>

                  <FormControl
                    disabled={!validate}
                  >
                    <Radio
                      checked={separator === 'hyphen-minus'}
                      label='Дефис­‑минус (U+002D)'
                      onChange={handleSeparatorChange}
                      slotProps={{ input: { 'aria-describedby': 'hyphen-minus-separator' } }}
                      value='hyphen-minus'
                    />
                    <FormHelperText id='hyphen-minus-separator'>
                      {/* ISO 2108:1970/1978? */}
                      <i lang='en'>ISO 2108:1992/2005/2017</i>, ГОСТ 7.53‑86, ГОСТ 7.53‑2001, ГОСТ Р 7.0.53‑2007.
                    </FormHelperText>
                  </FormControl>
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Sheet>
      </CssVarsProvider>
    </React.Fragment >
  );
}

export default Page;
