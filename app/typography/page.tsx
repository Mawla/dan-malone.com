export default function TypographyTest() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <div className="container mx-auto p-8 space-y-16 max-w-6xl">
        <header>
          <h1 className="heading-2 mb-2">Typography System</h1>
          <p className="body-20 text-[#333333]">
            A complete guide to our typography styles
          </p>
        </header>

        {/* Headings */}
        <section className="space-y-8">
          <div className="border-b border-gray-200 pb-2">
            <h2 className="text-xl font-medium text-[#333333]">Headings</h2>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-500 mb-2">heading-1 (60/120)</p>
              <h1 className="heading-1">
                The quick brown fox jumps over the lazy dog
              </h1>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">heading-2 (52/120)</p>
              <h2 className="heading-2">
                The quick brown fox jumps over the lazy dog
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">heading-3 (36/120)</p>
              <h3 className="heading-3">
                The quick brown fox jumps over the lazy dog
              </h3>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">heading-4 (20/1.4)</p>
              <h4 className="heading-4">
                The quick brown fox jumps over the lazy dog
              </h4>
            </div>
          </div>
        </section>

        {/* Titles */}
        <section className="space-y-8">
          <div className="border-b border-gray-200 pb-2">
            <h2 className="text-xl font-medium text-[#333333]">Titles</h2>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-500 mb-2">title-big (48/120)</p>
              <p className="title-big">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">title-small (36/120)</p>
              <p className="title-small">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </section>

        {/* Other Text Styles */}
        <section className="space-y-8">
          <div className="border-b border-gray-200 pb-2">
            <h2 className="text-xl font-medium text-[#333333]">
              Other Text Styles
            </h2>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-500 mb-2">metric (48/120)</p>
              <p className="metric">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">quote (26/120)</p>
              <p className="quote">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">badge (18/1.5)</p>
              <p className="badge">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">menu (16/2.0)</p>
              <p className="menu">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </section>

        {/* Body Text */}
        <section className="space-y-8">
          <div className="border-b border-gray-200 pb-2">
            <h2 className="text-xl font-medium text-[#333333]">Body Text</h2>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-500 mb-2">body-24 (24/150)</p>
              <p className="body-24">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">body-20 (20/150)</p>
              <p className="body-20">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">body-18 (18/150)</p>
              <p className="body-18">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">body-16 (16/24)</p>
              <p className="body-16">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </section>

        {/* Font Families */}
        <section className="space-y-8">
          <div className="border-b border-gray-200 pb-2">
            <h2 className="text-xl font-medium text-[#333333]">
              Font Families
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <p className="text-sm text-gray-500 mb-4">Lora</p>
              <p className="font-lora text-2xl">
                The quick brown fox jumps over the lazy dog
              </p>
              <div className="mt-4 space-y-2">
                <p className="font-lora font-normal">
                  Regular - The quick brown fox
                </p>
                <p className="font-lora font-medium">
                  Medium - The quick brown fox
                </p>
                <p className="font-lora font-semibold">
                  Semibold - The quick brown fox
                </p>
                <p className="font-lora font-bold">
                  Bold - The quick brown fox
                </p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <p className="text-sm text-gray-500 mb-4">Satoshi</p>
              <p className="font-satoshi text-2xl">
                The quick brown fox jumps over the lazy dog
              </p>
              <div className="mt-4 space-y-2">
                <p className="font-satoshi font-light">
                  Light - The quick brown fox
                </p>
                <p className="font-satoshi font-normal">
                  Regular - The quick brown fox
                </p>
                <p className="font-satoshi font-medium">
                  Medium - The quick brown fox
                </p>
                <p className="font-satoshi font-bold">
                  Bold - The quick brown fox
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="space-y-8">
          <div className="border-b border-gray-200 pb-2">
            <h2 className="text-xl font-medium text-[#333333]">Text Colors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-2">#111011 (Primary)</p>
                <p className="text-[#111011] text-2xl font-medium">
                  The quick brown fox
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">
                  #333333 (Secondary)
                </p>
                <p className="text-[#333333] text-2xl font-medium">
                  The quick brown fox
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
