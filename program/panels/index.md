---
layout: ieeevr-default
title: "Panels"
subtitle: "IEEE VR 2025"
title_separator: "|"
---

<h1>Panels</h1>
<div>
	<table class="styled-table">
		<tr>
			<th colspan="3">Panels</th>
		</tr>
		{% for panel in site.data.panels %}
		<tr>
			<td><a href="#{{ panel.id }}">{{ panel.name }}</a></td>
			<td style="font-size: 0.875em;">{{ panel.day }}, {{ panel.start }} - {{ panel.end }} ({{ panel.timezone }})<br>Room: {{ panel.room }}</td>
		</tr>
		{% endfor %}
	</table>
</div>