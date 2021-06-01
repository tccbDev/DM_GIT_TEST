// @ts-nocheck
sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("demo.HTML5Module.controller.View1", {
			onInit: function () {

                alert('hello world');
                console.log('2 nd modif ');
                console.log('KPI_Dashbord');

			}
		});
	});
