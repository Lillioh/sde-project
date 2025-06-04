namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        // Return a static list for example
        return response()->json([
            ['id' => 1, 'name' => 'Product A'],
            ['id' => 2, 'name' => 'Product B'],
        ]);
    }

    public function store(Request $request)
    {
        // Logic to store a product (just echo back data for now)
        return response()->json([
            'message' => 'Product created',
            'data' => $request->all()
        ]);
    }
}
