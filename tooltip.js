/*
The MIT License (MIT)

Copyright (c) 2013, Chris Staszkiewicz <chris.staszkiewicz@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var Config = {
	Id: 'Twify-Tooltip',
	Attr: 'twify-tooltip',
	Position: 'bottom',
	Padding: 7,
	Font: {
		Size: 12,
		Style: 'normal'
	},
	Color: '#FFF',
	Background: 'rgba(7,12,33,0.9)',
	Shadow: {
		Box: {
			Color: '#000',
			Size: [0, 0, 3]
		},
		Text: {
			Color: '#000',
			Size: [1, 1]
		}
	},
	Border: {
		Color: '#777777',
		Size: 1,
		Type: 'solid',
		Radius: 3
	}
}

var Twify = {
	Tooltip: function()
	{
		var Tooltip = this;
		this.__init__ = function()
		{
			$(document).ready(function()
			{
				$('body').prepend('<div id="' + Config.Id + '"></div>');

				var Style = Config;
				$('#' + Config.Id).css({
					'display': 'none',
					'position': 'absolute',
					'z-index': 99999,
					'padding': Style.Padding,
					'background-color': Style.Background,
					borderRadius: Style.Border.Radius,
					'border': Style.Border.Size + 'px ' + Style.Border.Type + ' ' + Style.Border.Color,
					boxShadow: Style.Shadow.Box.Size.join('px ') + 'px ' + Style.Shadow.Box.Color,
					'font-size': Style.Font.Size + 'px',
					'font-style': Style.Font.Style,
					'color': Style.Color
				});

				Tooltip.addEvents();

				$(document).mousemove(function(e)
				{
					Tooltip.Move(e.pageX, e.pageY);
				});
			});
		}

		this.Move = function(x, y)
		{
			Id = '#' + Config.Id
			$(Id).css("left", x - ($(Id).css("width").replace("px", "") / 2)).css("top", y + 25);
		}

		this.addEvents = function()
		{
			$('[' + Config.Attr + ']').hover(
				function()
				{
					Tooltip.Show($(this).attr(Config.Attr));
				},
				function()
				{
					Tooltip.Hide();
				}
			);
		}

		this.Show = function(data)
		{
			$('#' + Config.Id).html(data).show();
		}

		this.Hide = function()
		{
			$('#' + Config.Id).hide();
		}

		this.__init__();
	}
}
