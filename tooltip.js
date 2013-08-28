$.fn.TwifyTooltip = function(args)
{
	var Tooltip = this;
	var Config = {
		Id: 'Twify-Tooltip',
		Attr: 'twify-tooltip',
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

	$.extend(Config, args);

	this.__init__ = function()
	{
		$(document).ready(function()
		{
			$(Tooltip.selector).prepend('<div id="' + Config.Id + '"></div>');

			$('#' + Config.Id).css({
				'display': 'none',
				'position': 'absolute',
				'z-index': 99999,
				'padding': Config.Padding,
				'background-color': Config.Background,
				borderRadius: Config.Border.Radius,
				'border': Config.Border.Size + 'px ' + Config.Border.Type + ' ' + Config.Border.Color,
				boxShadow: Config.Shadow.Box.Size.join('px ') + 'px ' + Config.Shadow.Box.Color,
				'font-size': Config.Font.Size + 'px',
				'font-style': Config.Font.Style,
				'color': Config.Color
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
		$(Tooltip.selector).on('mouseenter', '[' + Config.Attr + ']', function(event) {
			Tooltip.Show($(this).attr(Config.Attr));
		});
		$(Tooltip.selector).on('mouseleave', '[' + Config.Attr + ']', function(event) {
			Tooltip.Hide();
		});
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
};
