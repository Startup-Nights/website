import client from "@mailchimp/mailchimp_marketing";

client.setConfig({
    apiKey: process.env.SLACK_WEBHOOK_URL as string,
    server: "us16",
});

export default function Newsletter({ data }) {

    // Handles the submit event on form submit.
    const handleSubmit = async (event: any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            email: event.target.email.value,
            first: event.target.last.value,
            last: event.target.first.value,
        }

        const response = await fetch('/api/newsletter', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: data.email,
                first: data.first,
                last: data.last,
            }),
        })

        console.log(response);
    }

    return (
        <div className="">
            <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
                The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4">

                <div className="col-span-1">
                    <label htmlFor="first" className="sr-only">
                        First name
                    </label>
                    <div className="flex">
                        <input
                            type="text"
                            name="first"
                            id="first"
                            autoComplete="first-name"
                            required
                            className="w-full min-w-0 flex-1 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                            placeholder="Max"
                        />
                    </div>
                </div>

                <div className="col-span-1">
                    <label htmlFor="last" className="sr-only">
                        Last name
                    </label>
                    <div className="flex">
                        <input
                            type="text"
                            name="last"
                            id="last"
                            autoComplete="last-name"
                            required
                            className="w-full min-w-0 flex-1 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                            placeholder="Muster"
                        />
                    </div>
                </div>

                <div className="col-span-1">
                    <label htmlFor="email" className="sr-only">
                        Email address
                    </label>
                    <div className="flex">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            required
                            className="w-full min-w-0 flex-1 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white placeholder-gray-500 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>

                <div className="col-span-1 rounded-md">
                    <button
                        type="submit"
                        className="flex w-full items-center justify-center rounded-md bg-sky-500 py-1.5 px-3 text-base font-semibold leading-7 text-white hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:text-sm sm:leading-6"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
        </div>

    )
}
