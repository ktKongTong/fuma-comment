import Link from "next/link";
import { Book } from "lucide-react";
import { CommentsWithAuth } from "./page.client";

export default function Page(): React.ReactNode {
	return (
		<main className="mx-auto w-full max-w-[1000px] sm:px-8">
			<div className="sticky top-0 z-10 flex flex-row items-center gap-4 bg-background px-3 py-4">
				<Link
					className="inline-flex items-center gap-2 text-sm font-medium"
					href="/docs"
				>
					<Book className="size-4" />
					Documentation
				</Link>

				<a
					aria-label="Github"
					className="ml-auto"
					href="https://github.com/fuma-nama/fuma-comment"
					rel="noreferrer noopener"
				>
					<svg
						role="img"
						viewBox="0 0 24 24"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						className="size-5"
					>
						<title>GitHub</title>
						<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
					</svg>
				</a>
			</div>
			<div className="px-3 text-center pt-12">
				<h1 className="text-lg font-medium mb-2">Welcome to Fuma Comment</h1>
				<p className="text-fc-muted-foreground">
					Bring beautiful comment areas to your blog, docs, anywhere!
				</p>
				<svg
					width="400"
					height="160"
					viewBox="100 100 400 160"
					fill="none"
					className="z-10 max-w-full text-muted-foreground"
				>
					<title>Arrow</title>
					<path
						d="M204.999 171.5L205.694 172.22L204.999 171.5ZM178.119 236.285C177.686 236.627 177.057 236.553 176.715 236.12L171.136 229.058C170.793 228.624 170.867 227.996 171.3 227.653C171.734 227.311 172.363 227.385 172.705 227.818L177.664 234.095L183.942 229.136C184.375 228.794 185.004 228.867 185.346 229.301C185.689 229.734 185.615 230.363 185.181 230.705L178.119 236.285ZM261.999 145C262.136 145.991 262.136 145.991 262.136 145.991C262.136 145.991 262.136 145.991 262.135 145.991C262.135 145.991 262.133 145.991 262.132 145.991C262.128 145.992 262.123 145.993 262.115 145.994C262.1 145.996 262.076 145.999 262.045 146.004C261.982 146.013 261.886 146.027 261.761 146.047C261.509 146.086 261.134 146.147 260.647 146.232C259.674 146.402 258.254 146.669 256.477 147.059C252.924 147.837 247.95 149.101 242.277 151.039C230.916 154.921 216.818 161.486 205.694 172.22L204.305 170.78C215.724 159.762 230.127 153.077 241.63 149.147C247.388 147.179 252.437 145.896 256.049 145.105C257.856 144.709 259.304 144.436 260.303 144.261C260.802 144.174 261.19 144.112 261.453 144.071C261.585 144.05 261.686 144.035 261.755 144.025C261.789 144.02 261.816 144.016 261.834 144.013C261.843 144.012 261.85 144.011 261.855 144.011C261.857 144.01 261.859 144.01 261.86 144.01C261.861 144.01 261.862 144.01 261.862 144.009C261.862 144.009 261.863 144.009 261.999 145ZM205.694 172.22C194.605 182.918 187.792 198.722 183.752 211.949C181.736 218.547 180.42 224.472 179.609 228.745C179.203 230.882 178.923 232.604 178.745 233.79C178.656 234.383 178.593 234.842 178.552 235.152C178.531 235.307 178.516 235.424 178.507 235.502C178.502 235.541 178.498 235.57 178.496 235.589C178.495 235.599 178.494 235.606 178.493 235.611C178.493 235.613 178.493 235.614 178.493 235.615C178.493 235.616 178.493 235.616 178.493 235.616C178.493 235.617 178.493 235.616 177.499 235.5C176.506 235.383 176.506 235.383 176.506 235.382C176.506 235.382 176.507 235.381 176.507 235.381C176.507 235.379 176.507 235.377 176.507 235.374C176.508 235.368 176.509 235.36 176.51 235.349C176.513 235.327 176.517 235.296 176.522 235.254C176.532 235.171 176.548 235.049 176.569 234.888C176.612 234.568 176.677 234.098 176.767 233.494C176.949 232.285 177.233 230.536 177.644 228.372C178.466 224.045 179.798 218.047 181.839 211.365C185.913 198.029 192.849 181.833 204.305 170.78L205.694 172.22Z"
						fill="currentColor"
					/>
					<path
						d="M272.359 133.273C272.828 133.352 273.438 133.406 274.188 133.438C274.938 133.469 275.711 133.484 276.508 133.484C277.305 133.484 278.062 133.461 278.781 133.414C279.5 133.352 280.078 133.273 280.516 133.18C280.719 132.977 280.922 132.828 281.125 132.734C281.328 132.641 281.562 132.555 281.828 132.477C282.016 132.523 282.18 132.672 282.32 132.922C282.477 133.156 282.555 133.406 282.555 133.672C282.555 133.938 282.508 134.164 282.414 134.352C282.32 134.523 282.156 134.633 281.922 134.68C281.375 134.805 280.766 134.914 280.094 135.008C279.422 135.102 278.734 135.164 278.031 135.195V137.75C278.031 138.531 278.031 139.359 278.031 140.234C278.031 141.109 278.023 141.938 278.008 142.719C278.008 143.5 278 144.195 277.984 144.805C277.969 145.398 277.953 145.805 277.938 146.023C277.891 146.211 277.766 146.344 277.562 146.422C277.375 146.516 277.172 146.562 276.953 146.562C276.734 146.562 276.531 146.508 276.344 146.398C276.156 146.289 276.062 146.148 276.062 145.977C276.062 145.852 276.062 145.656 276.062 145.391C276.062 145.109 276.07 144.742 276.086 144.289L276.227 137.891C276.242 137.344 276.25 136.852 276.25 136.414C276.25 135.961 276.25 135.57 276.25 135.242C275.547 135.242 274.906 135.242 274.328 135.242C273.766 135.227 273.273 135.188 272.852 135.125C272.445 135.047 272.125 134.93 271.891 134.773C271.672 134.617 271.562 134.383 271.562 134.07C271.562 133.852 271.633 133.664 271.773 133.508C271.914 133.352 272.109 133.273 272.359 133.273ZM287.289 140.398C287.914 139.773 288.656 139.273 289.516 138.898C290.375 138.508 291.281 138.289 292.234 138.242C292.469 138.273 292.641 138.383 292.75 138.57C292.875 138.742 292.938 138.93 292.938 139.133C292.938 139.305 292.891 139.469 292.797 139.625C292.719 139.766 292.594 139.836 292.422 139.836C291.391 140.07 290.484 140.367 289.703 140.727C288.938 141.086 288.32 141.562 287.852 142.156C287.852 142.469 287.867 142.781 287.898 143.094C287.945 143.391 287.969 143.703 287.969 144.031C287.969 144.438 287.953 144.844 287.922 145.25C287.906 145.656 287.859 146.055 287.781 146.445C287.766 146.648 287.664 146.789 287.477 146.867C287.289 146.945 287.086 146.984 286.867 146.984C286.648 146.984 286.445 146.93 286.258 146.82C286.086 146.727 286 146.586 286 146.398C286.047 145.961 286.086 145.516 286.117 145.062C286.164 144.594 286.188 144.133 286.188 143.68C286.188 143.07 286.109 142.562 285.953 142.156C285.812 141.75 285.68 141.414 285.555 141.148C285.508 141.07 285.414 140.961 285.273 140.82C285.148 140.664 285.016 140.508 284.875 140.352C284.734 140.18 284.609 140.008 284.5 139.836C284.391 139.664 284.336 139.516 284.336 139.391C284.336 139.125 284.438 138.898 284.641 138.711C284.859 138.508 285.102 138.406 285.367 138.406C285.633 138.406 285.945 138.602 286.305 138.992C286.664 139.383 286.992 139.852 287.289 140.398ZM299.312 149.914C298.859 150.273 298.336 150.453 297.742 150.453C297.227 150.453 296.711 150.328 296.195 150.078C295.695 149.828 295.297 149.492 295 149.07C294.938 149.008 294.906 148.922 294.906 148.812C294.906 148.609 294.977 148.391 295.117 148.156C295.273 147.938 295.453 147.828 295.656 147.828C295.734 147.828 295.812 147.852 295.891 147.898C296.172 148.148 296.461 148.344 296.758 148.484C297.07 148.625 297.367 148.695 297.648 148.695C298.164 148.695 298.578 148.367 298.891 147.711C299.219 147.07 299.477 146.125 299.664 144.875C299.43 144.953 299.188 145.016 298.938 145.062C298.703 145.094 298.453 145.109 298.188 145.109C297.953 145.109 297.633 145.094 297.227 145.062C296.82 145.031 296.414 144.891 296.008 144.641C295.602 144.391 295.25 144 294.953 143.469C294.656 142.922 294.508 142.133 294.508 141.102C294.508 140.82 294.516 140.531 294.531 140.234C294.547 139.938 294.562 139.648 294.578 139.367C294.609 139.07 294.641 138.797 294.672 138.547C294.703 138.281 294.734 138.055 294.766 137.867C294.797 137.617 294.891 137.438 295.047 137.328C295.203 137.219 295.375 137.164 295.562 137.164C295.781 137.164 295.984 137.227 296.172 137.352C296.359 137.477 296.453 137.648 296.453 137.867C296.453 138.148 296.422 138.492 296.359 138.898C296.297 139.305 296.266 139.727 296.266 140.164C296.266 140.773 296.281 141.289 296.312 141.711C296.344 142.117 296.43 142.453 296.57 142.719C296.711 142.969 296.914 143.148 297.18 143.258C297.461 143.367 297.836 143.422 298.305 143.422C298.586 143.422 298.836 143.383 299.055 143.305C299.289 143.227 299.562 143.148 299.875 143.07C299.969 141.898 300.016 140.719 300.016 139.531C300.016 139 300.008 138.492 299.992 138.008C299.977 137.508 299.953 137.055 299.922 136.648C299.922 136.477 300.008 136.336 300.18 136.227C300.352 136.102 300.562 136.039 300.812 136.039C301 136.039 301.18 136.078 301.352 136.156C301.523 136.219 301.641 136.336 301.703 136.508C301.734 136.867 301.758 137.25 301.773 137.656C301.789 138.047 301.797 138.445 301.797 138.852C301.797 139.945 301.742 141.078 301.633 142.25C301.539 143.406 301.383 144.5 301.164 145.531C300.961 146.562 300.703 147.469 300.391 148.25C300.078 149.031 299.719 149.586 299.312 149.914ZM310.188 145.695C310.266 145.086 310.32 144.453 310.352 143.797C310.398 143.141 310.422 142.484 310.422 141.828V138.758C310.422 138.57 310.508 138.43 310.68 138.336C310.852 138.227 311.047 138.172 311.266 138.172C311.453 138.172 311.633 138.211 311.805 138.289C311.977 138.367 312.094 138.492 312.156 138.664C312.172 139.102 312.18 139.609 312.18 140.188C312.195 140.766 312.203 141.367 312.203 141.992C312.203 142.648 312.18 143.312 312.133 143.984C312.086 144.641 312.047 145.273 312.016 145.883C311.969 146.148 311.859 146.344 311.688 146.469C311.516 146.609 311.328 146.68 311.125 146.68C310.906 146.68 310.695 146.609 310.492 146.469C310.289 146.328 310.188 146.109 310.188 145.812V145.695ZM312.578 134.914C312.5 135.305 312.344 135.602 312.109 135.805C311.875 136.008 311.594 136.109 311.266 136.109C311.141 136.109 310.992 136.094 310.82 136.062C310.648 136.016 310.484 135.945 310.328 135.852C310.188 135.742 310.062 135.602 309.953 135.43C309.844 135.242 309.789 135.008 309.789 134.727C309.789 134.227 309.93 133.867 310.211 133.648C310.492 133.414 310.859 133.297 311.312 133.297C311.766 133.297 312.094 133.438 312.297 133.719C312.5 134 312.602 134.32 312.602 134.68C312.602 134.711 312.594 134.75 312.578 134.797C312.578 134.844 312.578 134.883 312.578 134.914ZM316.609 143.398C316.625 143.086 316.633 142.781 316.633 142.484C316.633 142.188 316.641 141.898 316.656 141.617L316.727 139.977H315.953C315.734 139.977 315.539 139.977 315.367 139.977C315.211 139.961 315.07 139.93 314.945 139.883C314.82 139.82 314.727 139.727 314.664 139.602C314.602 139.477 314.57 139.297 314.57 139.062C314.57 138.875 314.609 138.711 314.688 138.57C314.781 138.414 314.922 138.336 315.109 138.336C315.297 138.336 315.531 138.344 315.812 138.359C316.109 138.375 316.438 138.375 316.797 138.359C316.797 137.5 316.781 136.648 316.75 135.805C316.719 134.961 316.703 134.062 316.703 133.109C316.703 132.844 316.797 132.656 316.984 132.547C317.172 132.422 317.375 132.359 317.594 132.359C317.922 132.359 318.156 132.484 318.297 132.734C318.438 132.969 318.531 133.258 318.578 133.602C318.625 133.945 318.633 134.305 318.602 134.68C318.586 135.039 318.578 135.336 318.578 135.57C318.578 136.555 318.555 137.477 318.508 138.336C319.258 138.336 319.969 138.328 320.641 138.312C321.328 138.281 321.859 138.242 322.234 138.195C322.422 138.227 322.555 138.328 322.633 138.5C322.727 138.656 322.773 138.828 322.773 139.016C322.773 139.281 322.711 139.477 322.586 139.602C322.477 139.727 322.258 139.82 321.93 139.883C321.617 139.945 321.18 139.977 320.617 139.977C320.07 139.977 319.352 139.977 318.461 139.977C318.43 140.492 318.406 141.023 318.391 141.57C318.391 142.117 318.391 142.695 318.391 143.305C318.391 143.914 318.5 144.383 318.719 144.711C318.938 145.023 319.219 145.18 319.562 145.18C319.938 145.18 320.273 145.047 320.57 144.781C320.867 144.5 321.156 144.133 321.438 143.68C321.531 143.523 321.688 143.445 321.906 143.445C322.125 143.445 322.32 143.523 322.492 143.68C322.68 143.836 322.773 144.023 322.773 144.242C322.773 144.555 322.664 144.867 322.445 145.18C322.227 145.477 321.945 145.75 321.602 146C321.258 146.25 320.875 146.453 320.453 146.609C320.031 146.766 319.625 146.844 319.234 146.844C318.75 146.844 318.336 146.742 317.992 146.539C317.664 146.336 317.398 146.07 317.195 145.742C316.992 145.414 316.844 145.047 316.75 144.641C316.656 144.219 316.609 143.805 316.609 143.398ZM334.891 138.711C334.953 138.664 335.023 138.625 335.102 138.594C335.18 138.547 335.266 138.523 335.359 138.523C335.766 138.555 336.188 138.664 336.625 138.852C337.062 139.039 337.461 139.305 337.82 139.648C338.18 139.992 338.477 140.406 338.711 140.891C338.945 141.375 339.062 141.93 339.062 142.555C339.047 143.211 338.93 143.789 338.711 144.289C338.508 144.773 338.227 145.18 337.867 145.508C337.523 145.836 337.109 146.078 336.625 146.234C336.156 146.406 335.641 146.492 335.078 146.492C334.641 146.492 334.195 146.406 333.742 146.234C333.289 146.078 332.883 145.844 332.523 145.531C332.164 145.203 331.867 144.812 331.633 144.359C331.398 143.906 331.281 143.383 331.281 142.789C331.281 142.258 331.383 141.742 331.586 141.242C331.789 140.727 332.039 140.273 332.336 139.883C332.648 139.492 332.984 139.18 333.344 138.945C333.719 138.711 334.07 138.594 334.398 138.594C334.57 138.594 334.734 138.633 334.891 138.711ZM335.031 140.094C334.75 140.234 334.492 140.383 334.258 140.539C334.039 140.68 333.844 140.852 333.672 141.055C333.516 141.258 333.391 141.508 333.297 141.805C333.219 142.102 333.18 142.469 333.18 142.906C333.18 143.297 333.242 143.617 333.367 143.867C333.508 144.117 333.68 144.32 333.883 144.477C334.102 144.617 334.336 144.719 334.586 144.781C334.852 144.828 335.109 144.852 335.359 144.852C335.891 144.852 336.336 144.641 336.695 144.219C337.055 143.797 337.234 143.281 337.234 142.672C337.234 142.203 337.164 141.82 337.023 141.523C336.898 141.227 336.727 140.992 336.508 140.82C336.305 140.633 336.07 140.492 335.805 140.398C335.539 140.289 335.281 140.188 335.031 140.094ZM341.125 143.398C341.125 142.867 341.125 142.391 341.125 141.969C341.141 141.531 341.148 141.117 341.148 140.727C341.164 140.32 341.172 139.906 341.172 139.484C341.188 139.047 341.203 138.555 341.219 138.008C341.219 137.695 341.328 137.469 341.547 137.328C341.781 137.172 342.023 137.094 342.273 137.094C342.461 137.094 342.625 137.164 342.766 137.305C342.922 137.43 343 137.617 343 137.867C343 138.414 342.992 138.914 342.977 139.367C342.977 139.805 342.969 140.242 342.953 140.68C342.938 141.102 342.922 141.531 342.906 141.969C342.906 142.406 342.906 142.891 342.906 143.422C342.906 143.703 342.953 143.945 343.047 144.148C343.156 144.352 343.289 144.523 343.445 144.664C343.617 144.805 343.797 144.906 343.984 144.969C344.172 145.031 344.352 145.062 344.523 145.062C344.852 145.062 345.219 144.938 345.625 144.688C346.047 144.422 346.406 144.086 346.703 143.68C346.672 143.102 346.648 142.578 346.633 142.109C346.617 141.625 346.609 141.18 346.609 140.773C346.609 140.352 346.609 139.914 346.609 139.461C346.609 139.008 346.641 138.602 346.703 138.242C346.766 137.867 346.875 137.562 347.031 137.328C347.188 137.094 347.43 136.977 347.758 136.977C347.961 137.008 348.148 137.094 348.32 137.234C348.492 137.359 348.578 137.539 348.578 137.773C348.531 138.336 348.484 138.945 348.438 139.602C348.391 140.242 348.367 140.93 348.367 141.664C348.367 142.039 348.375 142.438 348.391 142.859C348.406 143.266 348.438 143.68 348.484 144.102C348.547 144.258 348.641 144.445 348.766 144.664C348.906 144.883 349.039 145.102 349.164 145.32C349.305 145.539 349.422 145.75 349.516 145.953C349.609 146.141 349.656 146.289 349.656 146.398C349.656 146.648 349.555 146.859 349.352 147.031C349.148 147.203 348.93 147.289 348.695 147.289C348.555 147.289 348.406 147.227 348.25 147.102C348.109 146.992 347.977 146.852 347.852 146.68C347.727 146.508 347.609 146.328 347.5 146.141C347.406 145.969 347.336 145.812 347.289 145.672C346.883 146.016 346.414 146.297 345.883 146.516C345.352 146.734 344.797 146.844 344.219 146.844C343.719 146.844 343.273 146.742 342.883 146.539C342.508 146.336 342.188 146.07 341.922 145.742C341.656 145.414 341.453 145.047 341.312 144.641C341.188 144.219 341.125 143.805 341.125 143.398ZM353.312 143.398C353.328 143.086 353.336 142.781 353.336 142.484C353.336 142.188 353.344 141.898 353.359 141.617L353.43 139.977H352.656C352.438 139.977 352.242 139.977 352.07 139.977C351.914 139.961 351.773 139.93 351.648 139.883C351.523 139.82 351.43 139.727 351.367 139.602C351.305 139.477 351.273 139.297 351.273 139.062C351.273 138.875 351.312 138.711 351.391 138.57C351.484 138.414 351.625 138.336 351.812 138.336C352 138.336 352.234 138.344 352.516 138.359C352.812 138.375 353.141 138.375 353.5 138.359C353.5 137.5 353.484 136.648 353.453 135.805C353.422 134.961 353.406 134.062 353.406 133.109C353.406 132.844 353.5 132.656 353.688 132.547C353.875 132.422 354.078 132.359 354.297 132.359C354.625 132.359 354.859 132.484 355 132.734C355.141 132.969 355.234 133.258 355.281 133.602C355.328 133.945 355.336 134.305 355.305 134.68C355.289 135.039 355.281 135.336 355.281 135.57C355.281 136.555 355.258 137.477 355.211 138.336C355.961 138.336 356.672 138.328 357.344 138.312C358.031 138.281 358.562 138.242 358.938 138.195C359.125 138.227 359.258 138.328 359.336 138.5C359.43 138.656 359.477 138.828 359.477 139.016C359.477 139.281 359.414 139.477 359.289 139.602C359.18 139.727 358.961 139.82 358.633 139.883C358.32 139.945 357.883 139.977 357.32 139.977C356.773 139.977 356.055 139.977 355.164 139.977C355.133 140.492 355.109 141.023 355.094 141.57C355.094 142.117 355.094 142.695 355.094 143.305C355.094 143.914 355.203 144.383 355.422 144.711C355.641 145.023 355.922 145.18 356.266 145.18C356.641 145.18 356.977 145.047 357.273 144.781C357.57 144.5 357.859 144.133 358.141 143.68C358.234 143.523 358.391 143.445 358.609 143.445C358.828 143.445 359.023 143.523 359.195 143.68C359.383 143.836 359.477 144.023 359.477 144.242C359.477 144.555 359.367 144.867 359.148 145.18C358.93 145.477 358.648 145.75 358.305 146C357.961 146.25 357.578 146.453 357.156 146.609C356.734 146.766 356.328 146.844 355.938 146.844C355.453 146.844 355.039 146.742 354.695 146.539C354.367 146.336 354.102 146.07 353.898 145.742C353.695 145.414 353.547 145.047 353.453 144.641C353.359 144.219 353.312 143.805 353.312 143.398ZM364.375 143.445C364.578 143.445 364.859 143.461 365.219 143.492C365.578 143.523 365.93 143.625 366.273 143.797C366.617 143.953 366.914 144.203 367.164 144.547C367.414 144.891 367.539 145.367 367.539 145.977C367.539 146.539 367.344 147.039 366.953 147.477C366.562 147.93 366.016 148.156 365.312 148.156C364.984 148.156 364.68 148.086 364.398 147.945C364.117 147.805 363.875 147.625 363.672 147.406C363.469 147.203 363.305 146.969 363.18 146.703C363.07 146.453 363.016 146.211 363.016 145.977C363.031 145.758 363.07 145.547 363.133 145.344C363.195 145.141 363.312 144.977 363.484 144.852L363.766 144.664C363.688 144.555 363.648 144.438 363.648 144.312C363.648 144.078 363.711 143.883 363.836 143.727C363.977 143.555 364.156 143.461 364.375 143.445ZM364.844 144.945C364.875 144.992 364.891 145.062 364.891 145.156C364.891 145.281 364.836 145.43 364.727 145.602C364.617 145.773 364.562 145.906 364.562 146C364.562 146.172 364.633 146.312 364.773 146.422C364.93 146.547 365.086 146.609 365.242 146.609C365.555 146.609 365.766 146.531 365.875 146.375C366 146.219 366.062 146.086 366.062 145.977C366.062 145.742 366.023 145.555 365.945 145.414C365.883 145.273 365.789 145.172 365.664 145.109C365.555 145.031 365.422 144.984 365.266 144.969C365.125 144.953 364.984 144.945 364.844 144.945ZM364.328 132.195V132.125C364.328 131.953 364.422 131.82 364.609 131.727C364.797 131.617 365.016 131.562 365.266 131.562C365.484 131.562 365.703 131.602 365.922 131.68C366.141 131.758 366.312 131.883 366.438 132.055C366.438 132.273 366.422 132.461 366.391 132.617C366.375 132.773 366.359 132.906 366.344 133.016L366.156 133.695C366.203 134.18 366.242 134.578 366.273 134.891C366.32 135.203 366.359 135.5 366.391 135.781C366.422 136.047 366.445 136.328 366.461 136.625C366.477 136.922 366.484 137.297 366.484 137.75C366.484 138.266 366.469 138.781 366.438 139.297C366.406 139.812 366.344 140.281 366.25 140.703C366.172 141.109 366.047 141.445 365.875 141.711C365.719 141.961 365.508 142.086 365.242 142.086C365.023 142.086 364.828 142.023 364.656 141.898C364.484 141.758 364.398 141.602 364.398 141.43C364.398 141.367 364.406 141.32 364.422 141.289C364.547 140.867 364.625 140.477 364.656 140.117C364.688 139.758 364.703 139.422 364.703 139.109C364.703 138.25 364.688 137.562 364.656 137.047C364.641 136.516 364.617 136.031 364.586 135.594C364.555 135.141 364.516 134.672 364.469 134.188C364.422 133.688 364.375 133.023 364.328 132.195Z"
						fill="currentColor"
					/>
				</svg>
			</div>

			<CommentsWithAuth page="default" />
		</main>
	);
}
