//<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
//<script src="https://unpkg.com/jquery.terminal/js/jquery.terminal.min.js" type="text/javascript"></script>
//<script>
script1 = document.createElement('script');
script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
script1.type = "text/javascript";

script2 = document.createElement('script');
script2.src = "https://unpkg.com/jquery.terminal/js/jquery.terminal.min.js";
script2.type = "text/javascript";

jQuery(function ($) {
    $("div.console").terminal(
        {
            help: function () {
                this.echo("Available commands: help, clear, exit, page, about, goto");
            },
            exit: function () {
                this.echo("Bye!");
                $("div.console").remove();
            },
            clear: function () {
                this.clear();
            },
            page: function (subcommand) {
                if (subcommand == "reload" || subcommand == "refresh") {
                    this.echo("Reloading page...");
                    window.location.reload();
                } else if (subcommand == "back" || subcommand == "<-") {
                    this.echo("Going back...");
                    window.history.back();
                } else if (subcommand == "forward" || subcommand == "->") {
                    this.echo("Going forward...");
                    window.history.forward();
                } else if (subcommand == "list") {
                    this.echo("Available page subcommands:  \n reload, aliases: refresh \n back aliases: <- \n forward aliases: ->");
                } else {
                    this.echo("Unknown subcommand: " + subcommand + ". See subcommand list with 'page list'");
                }
            },
            about: function (what) {
                if (what == "me") {
                    this.echo("I'm Ecorous/Ember/Exo. I code, I do weird developer things, and I don't sleep.");
                } else if (what == "site") {
                    this.echo("Site created with Astro and Vue.js.");
                } else if (what == "site-github") {
                    window.open("https://github.com/ExoPlant/ecorous-site", "_blank", "noreferrer");
                    this.echo("Site created with Astro and Vue.js.");
                } else if (what == "list") {
                    this.echo("Available about subcommands:  \n me \n site \n site-github");
                }
            },
            goto: function (page) {
                this.echo("Going to " + page + "...");
                window.location.href = "/" + page;
            },

        },
        {
            greetings: "Basic console. \n Use the white box to type commands. \n Type 'help' for a list of commands.",
        }
    );
});
//	</script>