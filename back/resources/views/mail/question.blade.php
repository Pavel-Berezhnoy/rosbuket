<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>РосБукет</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
</head>

<body class="antialiased">
    <table bgcolor="#ffffff" align="center" border="0" cellspacing="0" cellpadding="0" style="margin:0;padding:0">
        <tbody>
            <tr>
                <td width="658">
                    <div style="max-width: 658px;background-color: #ffffff;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);border: 1px solid #ebebeb;padding: 40px 0 131px;margin: 0 auto;">
                        <div style="border: 1px solid #cecece;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.1);background-color: #fff;box-sizing: border-box;margin: 0 auto;max-width: 480px;">
                            <div class="check_mr_css_attr" style="border: 1px solid #fff;word-wrap: break-word;background-color: #fff;font-family: 'Roboto', sans-serif;font-size: 14px;margin: 0 auto;max-width: 480px;padding: 56px 48px 63px 48px;">
                                <div class="check-top_mr_css_attr" style="box-sizing: border-box;margin: 0;margin-bottom: 16px;padding: 0;text-align: center;">
                                    <div style="box-sizing: border-box;margin: 0;padding: 0;">Письмо пришло с сайта <a href="http://rosbuket" target="_blank">http://rosbuket</a></div>
                                </div>

                                <div class="check-headline_mr_css_attr" style="box-sizing: border-box;color: #FDA4AF;font-size: 16px;font-weight: bold;margin: 0;margin-bottom: 24px;padding: 0;text-align: left;text-transform: uppercase;">
                                    Здравствуйте, {{$question->username}}
                                </div>

                                <div class="check-sections_mr_css_attr" style="box-sizing: border-box;margin: 0;padding: 0;">

                                    {{$answer}}
                                </div>
                                <div class="check-congrats_mr_css_attr" style="box-sizing: border-box;color: #FDA4AF;font-size: 14px;margin: 0;margin-bottom: 26px;padding: 0;text-align: center;text-transform: uppercase;">
                                    Спасибо за обращение!
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>